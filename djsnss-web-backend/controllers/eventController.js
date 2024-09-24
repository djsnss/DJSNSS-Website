// controllers/eventController.js
const Event = require('../models/Event'); // Event model

// Event registration handler
const registerEvent = async (req, res) => {
  try {
    // Print incoming request data
    console.log('Received registration data:', req.body);

    // Save the event data to MongoDB
    const newEvent = new Event(req.body);
    await newEvent.save();

    // Send success response
    res.status(201).json({ message: 'Event registration successful!' });
  } catch (error) {
    console.error('Error saving event:', error.message);
    res.status(500).json({ message: 'Error registering for the event.' });
  }
};

module.exports = { registerEvent };
