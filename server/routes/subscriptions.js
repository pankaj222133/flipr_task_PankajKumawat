// routes/subscriptions.js

const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

// Define a Subscription schema
const subscriptionSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true }
});

// Create a Subscription model
const Subscription = mongoose.model('Subscription', subscriptionSchema);

// Route to add a new subscription (POST)
router.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body;
    const subscription = new Subscription({ email });
    await subscription.save();
    res.status(201).json({ message: 'Subscribed successfully', subscription });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to fetch all subscriptions (GET)
router.get('/', async (req, res) => {
  try {
    const subscriptions = await Subscription.find();
    res.json(subscriptions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
