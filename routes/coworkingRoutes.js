const express = require('express');
const multer = require('multer');
const { Coworking } = require('../models');


const router = express.Router();

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB limit
});

// Add a new coworking property
router.post(
  '/add',
  upload.fields([{ name: 'pdf', maxCount: 1 }, { name: 'multipleImage', maxCount: 10 }]),
  async (req, res) => {
    try {
      const { coworkingName, city, location, slug, title, description, keywords } = req.body;

      if (!coworkingName || !city || !location || !slug || !title || !description || !keywords) {
        return res.status(400).json({ success: false, message: "All fields are required." });
      }

      const pdf = req.files['pdf'] ? req.files['pdf'][0].path : null;
      const multipleImages = req.files['multipleImage']
        ? req.files['multipleImage'].map((img) => img.path)
        : [];

      const newCoworking = await Coworking.create({
        coworkingName,
        city,
        location,
        slug,
        title,
        description,
        keywords,
        pdf,
        multipleImages: JSON.stringify(multipleImages),
      });

      res.status(201).json({ success: true, message: "Coworking property added successfully!", coworking: newCoworking });
    } catch (error) {
      console.error("Error adding coworking property:", error);
      res.status(500).json({ success: false, message: "Internal server error." });
    }
  }
);

// Fetch a single coworking property by slug
router.get('/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const coworking = await Coworking.findOne({ where: { slug } });

    if (!coworking) {
      return res.status(404).json({ success: false, message: "Coworking property not found." });
    }

    res.status(200).json({ success: true, coworking });
  } catch (error) {
    console.error("Error fetching coworking property:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
});

// Update a coworking property
router.put(
  '/:slug',
  upload.fields([{ name: 'pdf', maxCount: 1 }, { name: 'multipleImage', maxCount: 10 }]),
  async (req, res) => {
    try {
      const { slug } = req.params;
      const coworking = await Coworking.findOne({ where: { slug } });

      if (!coworking) {
        return res.status(404).json({ success: false, message: "Coworking property not found." });
      }

      const { coworkingName, city, location, title, description, keywords, removeImages } = req.body;

      // Handle PDF update
      if (req.files['pdf']) {
        if (coworking.pdf) {
          fs.unlinkSync(coworking.pdf); // Remove old PDF
        }
        coworking.pdf = req.files['pdf'][0].path;
      }

      // Handle Image Update (Add new & remove selected)
      let existingImages = JSON.parse(coworking.multipleImages || '[]');

      if (removeImages) {
        const imagesToRemove = JSON.parse(removeImages); // List of images to remove
        existingImages = existingImages.filter(img => !imagesToRemove.includes(img));

        // Delete images from storage
        imagesToRemove.forEach(imgPath => {
          const fullPath = path.join(__dirname, '..', imgPath);
          if (fs.existsSync(fullPath)) {
            fs.unlinkSync(fullPath);
          }
        });
      }

      // Add new images
      if (req.files['multipleImage']) {
        const newImages = req.files['multipleImage'].map(img => img.path);
        existingImages = [...existingImages, ...newImages];
      }

      // Update property details
      await coworking.update({
        coworkingName,
        city,
        location,
        title,
        description,
        keywords,
        multipleImages: JSON.stringify(existingImages),
      });

      res.status(200).json({ success: true, message: "Coworking property updated successfully!", coworking });
    } catch (error) {
      console.error("Error updating coworking property:", error);
      res.status(500).json({ success: false, message: "Internal server error." });
    }
  }
);

// Delete a coworking property
router.delete('/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const coworking = await Coworking.findOne({ where: { slug } });

    if (!coworking) {
      return res.status(404).json({ success: false, message: "Coworking property not found." });
    }

    // Delete PDF file if exists
    if (coworking.pdf && fs.existsSync(coworking.pdf)) {
      fs.unlinkSync(coworking.pdf);
    }

    // Delete images
    const images = JSON.parse(coworking.multipleImages || '[]');
    images.forEach(imgPath => {
      const fullPath = path.join(__dirname, '..', imgPath);
      if (fs.existsSync(fullPath)) {
        fs.unlinkSync(fullPath);
      }
    });

    // Delete the record from the database
    await coworking.destroy();

    res.status(200).json({ success: true, message: "Coworking property deleted successfully!" });
  } catch (error) {
    console.error("Error deleting coworking property:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
});


// Fetch all coworking properties
router.get('/', async (req, res) => {
  try {
    const coworkings = await Coworking.findAll();
    res.status(200).json(coworkings);
  } catch (error) {
    console.error("Error fetching coworking properties:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
});

module.exports = router;
