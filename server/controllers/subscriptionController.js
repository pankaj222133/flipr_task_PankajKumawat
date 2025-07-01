const Subscription = require("../models/Subscription");

// Get all subscriptions
exports.getSubscriptions = async (req, res) => {
  try {
    const subscriptions = await Subscription.find();
    res.json(subscriptions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a subscription
exports.addSubscription = async (req, res) => {
  const { email } = req.body;

  const subscription = new Subscription({ email });
  try {
    const savedSubscription = await subscription.save();
    res.status(201).json(savedSubscription);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
