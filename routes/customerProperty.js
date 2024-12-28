// routes/customerProperty.js

const express = require('express');
const router = express.Router();
const { CustomerProperty } = require('../models');

// POST Route: Create new customer property
router.post('/customer-properties', async (req, res) => {
  try {
    const newProperty = await CustomerProperty.create(req.body);
    res.status(201).json(newProperty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET Route: Get all customer properties
router.get('/customer-properties', async (req, res) => {
  try {
    const properties = await CustomerProperty.findAll();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET Route: Get a single customer property by ID
router.get('/customer-properties/:id', async (req, res) => {
  try {
    const property = await CustomerProperty.findByPk(req.params.id);
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT Route: Update a customer property by ID
router.put('/customer-properties/:id', async (req, res) => {
  try {
    const property = await CustomerProperty.findByPk(req.params.id);
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    await property.update(req.body);
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE Route: Delete a customer property by ID
router.delete('/customer-properties/:id', async (req, res) => {
  try {
    const property = await CustomerProperty.findByPk(req.params.id);
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    await property.destroy();
    res.status(200).json({ message: 'Property deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
