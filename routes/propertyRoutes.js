const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const csv = require('csv-parser');
const XLSX = require('xlsx');
const { CommercialPropertyForRent, CommercialPropertyForSale } = require('../models');
const { PreleaseProperty } = require('../models');
const { PropertyInquiry } = require('../models');
const { AddProperty } = require('../models');
const { SaleProperty } = require('../models');
const { Project } = require('../models')
// const { contactForm } = require('../models');
// const {ContactForm} = require('../models');
const { ContactForm } = require('../models'); 
const {ShowroomProperty }= require('../models');
const { CfreProperty } = require ('../models');
const {sendContactFormEmail} = require('../mailer')

// Directory where files will be uploaded
const uploadDir = 'uploads';

// Create the directory if it doesn't exist
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Bulk Upload Route this api use for propety bulk upload
router.post('/cfreproperties/bulk-upload', upload.single('file'), async (req, res) => {
  try {
      const file = req.file;
      if (!file) {
          return res.status(400).json({ error: 'No file uploaded' });
      }

      const filePath = path.join(__dirname, '..', 'uploads', file.filename);
      const fileExtension = path.extname(file.originalname).toLowerCase();

      let properties = [];

      if (fileExtension === '.csv') {
          // Parse CSV file
          fs.createReadStream(filePath)
              .pipe(csv())
              .on('data', (row) => properties.push(row))
              .on('end', async () => {
                  try {
                      await CfreProperty.bulkCreate(properties);
                      fs.unlinkSync(filePath); // Remove the file after processing
                      res.status(201).json({ message: 'Properties uploaded successfully' });
                  } catch (error) {
                      res.status(500).json({ error: error.message });
                  }
              });
      } else if (fileExtension === '.xlsx') {
          // Parse Excel file
          try {
              const workbook = XLSX.readFile(filePath);
              const sheetName = workbook.SheetNames[0]; // Assumes the first sheet
              const sheet = workbook.Sheets[sheetName];
              properties = XLSX.utils.sheet_to_json(sheet);

              await CfreProperty.bulkCreate(properties);
              fs.unlinkSync(filePath); // Remove the file after processing
              res.status(201).json({ message: 'Properties uploaded successfully' });
          } catch (error) {
              res.status(500).json({ error: error.message });
          }
      } else {
          res.status(400).json({ error: 'Unsupported file type' });
      }
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});


router.post('/cfreproperties/bulk-delete', async (req, res) => {
  try {
    // Expect an array of IDs to be sent in the request body for deletion
    const { propertyIds } = req.body; 

    if (!propertyIds || !Array.isArray(propertyIds)) {
      return res.status(400).json({ error: 'Invalid or missing propertyIds array' });
    }

    // Perform bulk delete based on propertyIds
    const deletedCount = await CfreProperty.destroy({
      where: {
        id: propertyIds, // Assumes 'id' is the primary key field
      },
    });

    if (deletedCount > 0) {
      res.status(200).json({ message: `${deletedCount} properties deleted successfully` });
    } else {
      res.status(404).json({ error: 'No properties found with the provided IDs' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/cfreproperties/delete-all', async (req, res) => {
  try {
    // Delete all records in the CfreProperty table
    const deletedCount = await CfreProperty.destroy({
      where: {}, // No conditions, this will delete everything in the table
      truncate: true // Optional: This will reset the auto-increment counter for the table
    });

    if (deletedCount > 0) {
      res.status(200).json({ message: `All properties deleted successfully` });
    } else {
      res.status(404).json({ error: 'No properties found to delete' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Add a property with multiple images
router.post('/cfreproperties', upload.array('multiplePropertyImages', 10), async (req, res) => {
  console.log('Files received:', req.files); // Debugging line
  console.log('Form data received:', req.body); // Debugging line
  try {
    const multiplePropertyImages = req.files ? req.files.map(file => file.path) : [];
    const cfreProperty = await CfreProperty.create({
      ...req.body,
      multiplePropertyImages: multiplePropertyImages, // Save array of image paths
    });
    res.status(201).json(cfreProperty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/cfreproperties', async (req, res) => {
  try {
    const properties = await CfreProperty.findAll();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Get a specific CfreProperty by ID
router.get('/cfreproperties/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const property = await CfreProperty.findOne({ where: { id } });

    if (property) {
      res.status(200).json(property);
    } else {
      res.status(404).json({ error: "Property not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}); 

// Get a specific CfreProperty by slug
// router.get('/cfreproperties/:slug', async (req, res) => {
//   try {
//     const { slug } = req.params;

//     // Fetch the property from the database using the slug
//     const property = await CfreProperty.findOne({ where: { slug } });

//     if (property) {
//       // Return the property if found
//       return res.status(200).json(property);
//     } else {
//       // Return a 404 if the property is not found
//       return res.status(404).json({ error: "Property not found" });
//     }
//   } catch (error) {
//     // Catch any internal server errors and return a 500 status
//     console.error("Error fetching property by slug:", error.message);
//     return res.status(500).json({ error: "An error occurred while retrieving the property" });
//   }
// });

router.get('/cfreproperties/:slug', async (req, res) => {
  try {
      const slug = req.params.slug;
      console.log("Received slug:", slug);
      // Query the database for the slug
      const property = await CfreProperty.findOne({
          where: Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('slug')), slug.toLowerCase())
      });

      if (property) {
          res.status(200).json(property);
      } else {
          res.status(404).json({ error: "Property not found" });
      }
  } catch (error) {
      console.error("Error fetching property by slug:", error);
      res.status(500).json({ error: "Server error" });
  }
});







router.delete('/cfreproperties/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await CfreProperty.destroy({ where: { id } });
    if (deleted) {
      res.status(204).send("Property deleted");
    } else {
      res.status(404).json({ error: "Property not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



// Update a specific CfreProperty by ID
router.put('/cfreproperties/:id', upload.single('propertyImage'), async (req, res) => {
  try {
    const { id } = req.params;
    const propertyImage = req.file ? req.file.path : req.body.propertyImage; // Check if a new image was uploaded or keep the existing one
    const [updated] = await CfreProperty.update(
      {
        ...req.body,
        propertyImage: propertyImage, 
      },
      {
        where: { id },
      }
    );

    if (updated) {
      const updatedProperty = await CfreProperty.findOne({ where: { id } });
      res.status(200).json(updatedProperty);
    } else {
      res.status(404).json({ error: "Property not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



// POST route to create a showroom property USING RIGHT NOW
router.post('/showroomproperty', async (req, res) => {
  try {
      const showroomProperty = await ShowroomProperty.create(req.body);
      res.status(201).json(showroomProperty);
  } catch (error) {
      res.status(500).json({ error: 'Failed to create showroom property' });
  }
});

// GET route to fetch all showroom properties USING RIGHT NOW
router.get('/showroomproperty', async (req, res) => {
  try {
      const showroomProperties = await ShowroomProperty.findAll();
      res.status(200).json(showroomProperties);
  } catch (error) {
      res.status(500).json({ error: 'Failed to fetch showroom properties' });
  }
});







// POST route for the contact form USING RIGHT NOW
router.post('/contactform', async (req, res) => {
  try {
    console.log('Request Body:', req.body);
    const contactform = await ContactForm.create(req.body);

     // Send email with the contact form details
     await sendContactFormEmail(req.body);
    res.status(201).json(contactform);
  } catch (error) {
    console.error('Error creating contact form:', error);
    res.status(500).json({ error: 'Failed to create contact form', details: error.message });
  }
});

// GET route to retrieve all contact forms USING RIGHT NOW
router.get('/contactforms', async (req, res) => {
  try {
    const contactForms = await ContactForm.findAll(); // Fetch all records from the ContactForms table
    res.status(200).json(contactForms); // Respond with the retrieved records
  } catch (error) {
    console.error('Error fetching contact forms:', error); // Log any errors that occur
    res.status(500).json({ error: 'Failed to retrieve contact forms' }); // Respond with a 500 error if something goes wrong
  }
});



// Create a new Project USING RIGHT NOW
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


// Get all Projects USING RIGHT NOW
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});
    
// Get a specific Project by ID USING RIGHT NOW
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

// Update a Project by ID USING RIGHT NOW
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

// Delete a Project by ID USING RIGHT NOW
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


// Route to create a new Sale Property with image upload USING RIGHT NOW
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


// Route to create a new property in SaleProperties with image upload
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




// NOT IS USE THIS ROUTES START

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

//END






// Route to create a new property in AddProperties with image upload USING RIGHT NOW
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

// Route to get all properties from AddProperties USING RIGHT NOW
router.get('/rentproperties', async (req, res) => {
  try {
    const properties = await AddProperty.findAll();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get a single property from AddProperties by ID USING RIGHT NOW
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

// Route to update a property in AddProperties by ID USING RIGHT NOW
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


// Route to get combined properties from SaleProperty and AddProperty USING RIGHT NOW
router.get('/combinedproperties', async (req, res) => {
  console.log('Combined properties route hit');
  try {
    // Fetch data from investproperties (SaleProperty)
    const investProperties = await SaleProperty.findAll();

    // Fetch data from rentproperties (AddProperty)
    const rentProperties = await AddProperty.findAll();

    // Combine the results into one array with unique IDs
    const combinedProperties = [
      ...investProperties.map(property => ({ ...property.toJSON(), id: `invest-${property.id}`, type: 'invest' })),
      ...rentProperties.map(property => ({ ...property.toJSON(), id: `rent-${property.id}`, type: 'rent' }))
    ];

    // Return the combined data as the response
    res.status(200).json(combinedProperties);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch combined properties', details: error.message });
  }
});


module.exports = router;

