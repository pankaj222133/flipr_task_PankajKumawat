const Contact = require("../models/Contact");

// Get all contacts
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a contact
exports.addContact = async (req, res) => {
  const { fullName, email, mobileNumber, city } = req.body;

  const contact = new Contact({ fullName, email, mobileNumber, city });
  try {
    const savedContact = await contact.save();
    res.status(201).json(savedContact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
