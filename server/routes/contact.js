// routes/contact.js

const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

// Define a Contact schema
const contactSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  city: { type: String, required: true }
});

// Create a Contact model
const Contact = mongoose.model('Contact', contactSchema);

// Route to submit a new contact form (POST)
router.post('/submit', async (req, res) => {
  try {
    const { fullName, email, mobileNumber, city } = req.body;
    const contact = new Contact({ fullName, email, mobileNumber, city });
    await contact.save();
    res.status(201).json({ message: 'Contact form submitted successfully', contact });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to fetch all contact submissions (GET)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
