const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mydatabase');

// Event Schema
const eventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  eventImg: { type: String, required: true },
  eventDesc: { type: String, required: true },
  eventDate: { type: Date, required: true },
});

const Event = mongoose.model('Event', eventSchema);

// Registration Schema
const registrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sapId: { type: String, required: true },
  branch: { type: String, required: true },
  year: { type: String, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true },
  description: { type: String, required: true },
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
});

const Registration = mongoose.model('Registration', registrationSchema);

// Hardcoded admin credentials
const ADMIN_EMAIL = 'admin@example.com';
const ADMIN_PASSWORD = 'password123';

// Fetch events
app.get('/api/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    console.error('Error fetching events:', error.message);
    res.status(500).json({ message: 'Error fetching events' });
  }
});

// Create an event
app.post('/api/events/create', (req, res) => {
  const { eventName, eventImg, eventDesc, eventDate } = req.body;

  if (!eventName || !eventImg || !eventDesc || !eventDate) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newEvent = new Event({ eventName, eventImg, eventDesc, eventDate });

  newEvent.save()
    .then(savedEvent => res.json(savedEvent))
    .catch(error => {
      console.error('Error creating event:', error.message);
      res.status(400).json({ message: 'Error creating event' });
    });
});

// Delete an event
app.delete('/api/events/:id', (req, res) => {
  Event.findByIdAndDelete(req.params.id)
    .then(event => {
      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }
      res.json({ message: 'Event deleted' });
    })
    .catch(error => {
      console.error('Error deleting event:', error.message);
      res.status(500).json({ message: 'Error deleting event' });
    });
});

// Update an event
app.put('/api/events/:id', (req, res) => {
  const { eventName, eventImg, eventDesc, eventDate } = req.body;

  if (!eventName || !eventImg || !eventDesc || !eventDate) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  Event.findByIdAndUpdate(
    req.params.id,
    { eventName, eventImg, eventDesc, eventDate },
    { new: true }
  )
    .then(updatedEvent => {
      if (!updatedEvent) {
        return res.status(404).json({ message: 'Event not found' });
      }
      res.json(updatedEvent);
    })
    .catch(error => {
      console.error('Error updating event:', error.message);
      res.status(400).json({ message: 'Error updating event' });
    });
});

// Admin login endpoint (without JWT)
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    res.json({ success: true }); // Simply return success if credentials match
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Register for an event
app.post('/api/register', async (req, res) => {
  const { name, sapId, branch, year, gender, email, description, eventId } = req.body;

  if (!name || !sapId || !branch || !year || !gender || !email || !description || !eventId) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const registration = new Registration({ name, sapId, branch, year, gender, email, description, eventId });
    await registration.save();
    res.status(200).json({ message: 'Successfully registered for the event!' });
  } catch (error) {
    console.error('Error registering for the event:', error.message);
    res.status(500).json({ message: 'Error registering for the event' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
