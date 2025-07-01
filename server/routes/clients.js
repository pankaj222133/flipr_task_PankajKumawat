// routes/clients.js

const express = require('express');
const mongoose = require('mongoose');
// const multer = require('multer');
// const path = require('path');

const router = express.Router();

// Define a Client schema
const clientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    designation: { type: String, required: true },
    description: { type: String, required: true },
    //   image: { type: String}  // URL to the image file
});

// Create a Client model
const Client = mongoose.model('Client', clientSchema);

// Route to add a new client (POST)
router.post('/add', async (req, res) => {
    try {
        const { name, designation, description } = req.body;
        const client = new Client({ name, designation, description });
        await client.save();
        res.status(201).json({ message: 'Client added successfully', client });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Route to fetch all clients (GET)
router.get('/', async (req, res) => {
    try {
        const clients = await Client.find();
        res.json(clients);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
