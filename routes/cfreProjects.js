const express = require('express');
const router = express.Router();
const multer = require('multer');
const { CfreProject } = require('../models'); 

// 🛡️ Set up multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// 📤 Create a project (POST)
router.post(
  '/',
  upload.fields([
    { name: 'ProjectImages', maxCount: 10 },
    { name: 'floorPlanImages', maxCount: 5 },
  ]),
  async (req, res) => {
    try {
      const {
        projectName,
        reraRegdNo,
        builderName,
        projectDetails,
        price,
        area,
        projectArea,
        possession,
        city,
        location,
        commencementCertificate,
        occupancyCertificate,
        approvedBy,
        availableFor,
        specification,
        projectPlans,
        amenities,
        slug,
        discription,
        keyword,
        title,
        video,
        virtualVideoTour,
      } = req.body;

      // Handle projectPlans data
      let parsedProjectPlans = [];

      if (projectPlans) {
        try {
          // If it's already a string, parse it
          if (typeof projectPlans === 'string') {
            parsedProjectPlans = JSON.parse(projectPlans);
          } else {
            // If it's already an object (from middleware parsing)
            parsedProjectPlans = projectPlans;
          }
          
          // Ensure it's an array
          if (!Array.isArray(parsedProjectPlans)) {
            parsedProjectPlans = [parsedProjectPlans];
          }
        } catch (error) {
          console.error('Error parsing projectPlans:', error);
          parsedProjectPlans = [];
        }
      }

      console.log('Body:', req.body);
      console.log('Project Plans:', parsedProjectPlans);
      console.log('Files:', req.files);

      const ProjectImages = req.files?.['ProjectImages']?.map((file) => file.path) || [];
      const floorPlanImages = req.files?.['floorPlanImages']?.map((file) => file.path) || [];

      const newProject = await CfreProject.create({
        projectName,
        reraRegdNo,
        builderName,
        projectDetails,
        price,
        area,
        projectArea,
        possession,
        city,
        location,
        commencementCertificate,
        occupancyCertificate,
        approvedBy,
        availableFor,
        specification,
        projectPlans: parsedProjectPlans, // Use the parsed project plans here
        amenities,
        slug,
        discription,
        keyword,
        title,
        video,
        virtualVideoTour,
        ProjectImages,
        floorPlanImages,
      });
  
      res.status(201).json({
        message: 'Project created successfully',
        data: newProject,
      });
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Failed to create project' });
    }
  }
);

// 📝 Get a project by slug (GET)
router.get('/:slug', async (req, res) => {
    try {
      const project = await CfreProject.findOne({ where: { slug: req.params.slug } });
      if (!project) return res.status(404).json({ error: 'Project not found' });
  
      res.json(project);
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Failed to retrieve project' });
    }
  });

// ✅ GET All Projects
router.get('/', async (req, res) => {
    try {
      const projects = await CfreProject.findAll();
      res.status(200).json(projects);
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Failed to retrieve projects' });
    }
  });

// 🛠️ Update a project (PUT)
router.put('/:id', async (req, res) => {
  try {
    const project = await CfreProject.findOne({ where: { id: req.params.id } });
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    await project.update(req.body);
    res.json({ message: 'Project updated successfully', project });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(400).json({ error: 'Failed to update project' });
  }
});

// 🗑️ Delete a project (DELETE)
router.delete('/:slug', async (req, res) => {
  try {
    const project = await CfreProject.findOne({ where: { slug: req.params.slug } });
    if (!project) return res.status(404).json({ error: 'Project not found' });

    await project.destroy();
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(400).json({ error: 'Failed to delete project' });
  }
});

// Export the router
module.exports = router;
