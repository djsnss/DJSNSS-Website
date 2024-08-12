// routes/registration.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define the schema and model for registration
const registrationSchema = new mongoose.Schema({
  name: String,
  sapId: String,
  branch: String,
  year: String,
  gender: String,
  email: String,
  description: String,
  eventId: mongoose.Schema.Types.ObjectId, // Add this if you want to associate with an event
});

const Registration = mongoose.model('Registration', registrationSchema);

// Route to handle registration
router.post('/', async (req, res) => {
  try {
    const registration = new Registration(req.body);
    await registration.save();
    res.status(200).json({ message: 'Successfully registered for the event!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering for the event.' });
  }
});

module.exports = router;
