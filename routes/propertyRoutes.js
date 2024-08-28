const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { CommercialPropertyForRent, CommercialPropertyForSale } = require('../models');
const { PreleaseProperty } = require('../models');
const { PropertyInquiry } = require('../models');
const { AddProperty } = require('../models');
const { SaleProperty } = require('../models');
const { Project } = require('../models')
// const { contactForm } = require('../models');
// const {ContactForm} = require('../models');
const { ContactForm } = require('../models'); 

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// Initialize the upload middleware
const upload = multer({ storage: storage });
// POST route for the contact form
router.post('/contactform', async (req, res) => {
  try {
    console.log('Request Body:', req.body);
    const contactform = await ContactForm.create(req.body);
    res.status(201).json(contactform);
  } catch (error) {
    console.error('Error creating contact form:', error);
    res.status(500).json({ error: 'Failed to create contact form', details: error.message });
  }
});

// GET route to retrieve all contact forms
router.get('/contactforms', async (req, res) => {
  try {
    const contactForms = await ContactForm.findAll(); // Fetch all records from the ContactForms table
    res.status(200).json(contactForms); // Respond with the retrieved records
  } catch (error) {
    console.error('Error fetching contact forms:', error); // Log any errors that occur
    res.status(500).json({ error: 'Failed to retrieve contact forms' }); // Respond with a 500 error if something goes wrong
  }
});



// Create a new Project
router.post('/projects', async (req, res) => {
  try {
    console.log('Request body:', req.body);
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({ error: 'Failed to create project' });
  }
});


// Get all Projects
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});
    
// Get a specific Project by ID
router.get('/projects/:id', async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ error: 'Project not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch project' });
  }
});

// Update a Project by ID
router.put('/projects/:id', async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (project) {
      await project.update(req.body);
      res.status(200).json(project);
    } else {
      res.status(404).json({ error: 'Project not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update project' });
  }
});

// Delete a Project by ID
router.delete('/projects/:id', async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (project) {
      await project.destroy();
      res.status(200).json({ message: 'Project deleted successfully' });
    } else {
      res.status(404).json({ error: 'Project not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete project' });
  }
});


// Route to create a new Sale Property with image upload
router.post('/investproperties', upload.single('bannerImage'), async (req, res) => {
  try {
    const bannerImage = req.file ? req.file.path : null;
    const saleProperty = await SaleProperty.create({
      ...req.body,
      bannerImage: bannerImage,
    });
    res.status(201).json(saleProperty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Route to create a new Sale Property with image upload
router.post('/investproperties', upload.single('bannerImage'), async (req, res) => {
  try {
    const bannerImage = req.file ? req.file.path : null;
    const property = await SaleProperty.create({
      ...req.body,
      bannerImage: bannerImage,
    });
    res.status(201).json(property);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get all Sale Properties
router.get('/investproperties', async (req, res) => {
  try {
    const properties = await SaleProperty.findAll();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Route to update a Sale Property by ID
// Route to get a single Sale Property by ID
router.get('/investproperties/:id', async (req, res) => {
  try {
    const property = await SaleProperty.findByPk(req.params.id);
    if (property) {
      res.status(200).json(property);
    } else {
      res.status(404).json({ error: 'Property not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});





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
  console.log(req.body);  // Debugging line
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


// Route to get combined properties from AddProperty and SaleProperty
router.get('/newallproperties', async (req, res) => {
  try {
    const saleProperties = await SaleProperty.findAll();
    const addProperties = await AddProperty.findAll();

    const allProperties = [
      ...saleProperties.map(property => ({ ...property.toJSON(), type: 'sale' })),
      ...addProperties.map(property => ({ ...property.toJSON(), type: 'add' }))
    ];

    res.status(200).json(allProperties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/inquire', async (req, res) => {
  try {
    const { name, mobile, email, propertyName, propertyId } = req.body;

    const inquiry = await PropertyInquiry.create({
      name,
      mobile,
      email,
      propertyName,
      propertyId
    });

    res.status(201).json(inquiry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Route to get all Property Inquiries
router.get('/inquiries', async (req, res) => {
  try {
    const inquiries = await PropertyInquiry.findAll();
    res.status(200).json(inquiries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get a single Property Inquiry by ID
router.get('/inquiries/:id', async (req, res) => {
  try {
    const inquiry = await PropertyInquiry.findByPk(req.params.id);
    if (inquiry) {
      res.status(200).json(inquiry);
    } else {
      res.status(404).json({ error: 'Inquiry not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to create a new property in AddProperties with image upload
router.post('/rentproperties', upload.single('bannerImage'), async (req, res) => {
  try {
    const bannerImage = req.file ? req.file.path : null;
    const property = await AddProperty.create({
      ...req.body,
      bannerImage: bannerImage,
    });
    res.status(201).json(property);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get all properties from AddProperties
router.get('/rentproperties', async (req, res) => {
  try {
    const properties = await AddProperty.findAll();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get a single property from AddProperties by ID
router.get('/rentproperties/:id', async (req, res) => {
  try {
    const property = await AddProperty.findByPk(req.params.id);
    if (property) {
      res.status(200).json(property);
    } else {
      res.status(404).json({ error: 'Property not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to update a property in AddProperties by ID
router.put('/rentproperties/:id', upload.single('bannerImage'), async (req, res) => {
  try {
    const bannerImage = req.file ? req.file.path : null;
    const [updated] = await AddProperty.update({
      ...req.body,
      bannerImage: bannerImage,
    }, {
      where: { id: req.params.id }
    });

    if (updated) {
      const updatedProperty = await AddProperty.findByPk(req.params.id);
      res.status(200).json(updatedProperty);
    } else {
      res.status(404).json({ error: 'Property not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;

