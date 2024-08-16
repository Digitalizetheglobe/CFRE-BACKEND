const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { CommercialPropertyForRent, CommercialPropertyForSale } = require('../models');
const { PreleaseProperty } = require('../models');

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); 
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
  } catch (error) {``
    res.status(500).json({ error: error.message });
  }
});
// Route to get all Commercial Properties For Sale
router.get('/sale', async (req, res) => {
  try {
    const properties = await CommercialPropertyForSale.findAll();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



// Route to get all Commercial Properties For Rent
router.get('/rent', async (req, res) => {
  try {
    const properties = await CommercialPropertyForRent.findAll();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get a single Commercial Property For Rent by ID
router.get('/rent/:id', async (req, res) => {
  try {
    const property = await CommercialPropertyForRent.findByPk(req.params.id);
    if (property) {
      res.status(200).json(property);
    } else {
      res.status(404).json({ error: 'Property not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to update a Commercial Property For Rent by ID
router.put('/rent/:id', upload.single('bannerImage'), async (req, res) => {
  try {
    const bannerImage = req.file ? req.file.path : null;
    const [updated] = await CommercialPropertyForRent.update({
      ...req.body,
      bannerImage: bannerImage,
    }, {
      where: { id: req.params.id }
    });

    if (updated) {
      const updatedProperty = await CommercialPropertyForRent.findByPk(req.params.id);
      res.status(200).json(updatedProperty);
    } else {
      res.status(404).json({ error: 'Property not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });                                   
  }
});

// Route to delete a Commercial Property For Rent by ID
router.delete('/rent/:id', async (req, res) => {
  try {
    const deleted = await CommercialPropertyForRent.destroy({
      where: { id: req.params.id }
    });

    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Property not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Route to create a new Prelease Property
router.post('/prelease', async (req, res) => {
  try {
    const property = await PreleaseProperty.create(req.body);
    res.status(201).json(property);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get all Prelease Properties
router.get('/prelease', async (req, res) => {
  try {
    const properties = await PreleaseProperty.findAll();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
 

// Route to get a single Prelease Property by ID
router.get('/prelease/:id', async (req, res) => {
  try {
    const property = await PreleaseProperty.findByPk(req.params.id);
    if (property) {
      res.status(200).json(property);
    } else {
      res.status(404).json({ error: 'Property not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Route to update a Prelease Property by ID
router.put('/prelease/:id', async (req, res) => {
  try {
    const [updated] = await PreleaseProperty.update(req.body, {
      where: { id: req.params.id }
    });

    if (updated) {
      const updatedProperty = await PreleaseProperty.findByPk(req.params.id);
      res.status(200).json(updatedProperty);
    } else {
      res.status(404).json({ error: 'Property not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Route to delete a Prelease Property by ID
router.delete('/prelease/:id', async (req, res) => {
  try {
    const deleted = await PreleaseProperty.destroy({
      where: { id: req.params.id }
    });

    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Property not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Route to get all Commercial Properties (both for rent and sale)
router.get('/properties', async (req, res) => {
  try {
    // Fetch all properties for rent
    const propertiesForRent = await CommercialPropertyForRent.findAll();

    // Fetch all properties for sale
    const propertiesForSale = await CommercialPropertyForSale.findAll();

    // Combine the two results
    const allProperties = [
      ...propertiesForRent.map(property => ({ ...property.toJSON(), type: 'rent' })),
      ...propertiesForSale.map(property => ({ ...property.toJSON(), type: 'sale' }))
    ];

    res.status(200).json(allProperties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

