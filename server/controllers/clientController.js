const Client = require("../models/Client");

// Get all clients
exports.getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a client
exports.addClient = async (req, res) => {
  const { name, description, designation } = req.body;
//   const image = req.file ? req.file.path : "";

  const client = new Client({ name, description, designation });
  try {
    const savedClient = await client.save();
    res.status(201).json(savedClient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
