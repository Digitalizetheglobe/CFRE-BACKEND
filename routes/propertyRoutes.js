const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { CommercialPropertyForRent, CommercialPropertyForSale } = require('../models');

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Set the folder to store images
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Set the file name
  }
});

// Initialize the upload middleware
const upload = multer({ storage: storage });

// Route to create a new Commercial Property For Rent with image upload
router.post('/rent', upload.single('bannerImage'), async (req, res) => {
  try {
    const bannerImage = req.file ? req.file.path : null;
    const property = await CommercialPropertyForRent.create({
      ...req.body,
      bannerImage: bannerImage,
    });
    res.status(201).json(property);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to create a new Commercial Property For Sale with image upload
router.post('/sale', upload.single('bannerImage'), async (req, res) => {
  try {
    const bannerImage = req.file ? req.file.path : null;
    const property = await CommercialPropertyForSale.create({
      ...req.body,
      bannerImage: bannerImage,
    });
    res.status(201).json(property);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
