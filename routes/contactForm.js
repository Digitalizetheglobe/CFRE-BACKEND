const express = require('express');
const { ContactForm } = require('../models');
const router = express.Router();

router.post('/contactform', async (req, res) => {
  try {
    const { name, email, mobileNumber, message } = req.body;
    const contactForm = await ContactForm.create({
      name,
      email,
      mobileNumber,
      message,
    });
    res.status(201).json(contactForm);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while submitting the contact form' });
  }
});

module.exports = router;
