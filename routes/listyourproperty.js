const express = require('express');
const router = express.Router();
const { ListYourProperty } = require('../models');

// Route to create a new property
router.post('/', async (req, res) => {
  try {
    const newProperty = await ListYourProperty.create({
      type_of_space: req.body.type_of_space,
      full_name: req.body.full_name,
      email: req.body.email,
      phone_number: req.body.phone_number,
      building_name: req.body.building_name,
      locality: req.body.locality,
      city: req.body.city,
      carpet_area: req.body.carpet_area,
      build_up_area: req.body.build_up_area,
      floor_number: req.body.floor_number,
      unit_no: req.body.unit_no,
      rent_per_month: req.body.rent_per_month,
    });
    res.status(201).json(newProperty);
  } catch (error) {
    console.error('Error creating property:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to get all properties
router.get('/', async (req, res) => {
  try {
    const properties = await ListYourProperty.findAll();
    res.status(200).json(properties);
  } catch (error) {
    console.error('Error fetching properties:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
