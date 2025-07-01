const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema({
  email: String,
});

module.exports = mongoose.model("Subscription", subscriptionSchema);