require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDb = require('./utils/db');
const Registration=require('./models/Registration')
const LoginWork=require('./models/LoginWork')
const app = express();

const corsOptions = {
  origin: 'http://localhost:5173', // Allow requests from this origin
  methods: 'GET,POST,PUT,DELETE',  // Allow these methods
  allowedHeaders: 'Content-Type,Authorization', // Allow these headers
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Event Schema
const eventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  eventImg: { type: String, required: true },
  eventDesc: { type: String, required: true },
  eventDate: { type: Date, required: true },
});

const Event = mongoose.model('Event', eventSchema);

app.get('/api/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    console.error('Error fetching events:', error.message);
    res.status(500).json({ message: 'Error fetching events' });
  }
});

app.post('/api/events/create', async (req, res) => {
  const { eventName, eventImg, eventDesc, eventDate } = req.body;

  if (!eventName || !eventImg || !eventDesc || !eventDate) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newEvent = new Event({ eventName, eventImg, eventDesc, eventDate });
    const savedEvent = await newEvent.save();
    res.json(savedEvent);
  } catch (error) {
    console.error('Error creating event:', error.message);
    res.status(400).json({ message: 'Error creating event' });
  }
});


app.delete('/api/events/:id', async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json({ message: 'Event deleted' });
  } catch (error) {
    console.error('Error deleting event:', error.message);
    res.status(500).json({ message: 'Error deleting event' });
  }
});


app.put('/api/events/:id', async (req, res) => {
  const { eventName, eventImg, eventDesc, eventDate } = req.body;

  if (!eventName || !eventImg || !eventDesc || !eventDate) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      { eventName, eventImg, eventDesc, eventDate },
      { new: true }
    );
    if (!updatedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json(updatedEvent);
  } catch (error) {
    console.error('Error updating event:', error.message);
    res.status(400).json({ message: 'Error updating event' });
  }
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'admin@example.com' && password === 'admin123') {
    res.json({ success: true });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.post('/api/login-work', async (req, res) => {
  const { name, photo, designation, description } = req.body;
  

  if (!name || !photo || !designation || !description) {
    console.log(name,photo,designation,description)
    console.log(req.name)
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    console.log(name,photo,designation,description)
    const newLoginWork = new LoginWork({
      name:name,
      photo:photo,
      designation:designation,
      description:description
    });

    const savedLoginWork = await newLoginWork.save();
    res.status(201).json({ success: true, data: savedLoginWork });
  } catch (error) {
    console.error('Error saving data:', error.message);
    res.status(500).json({ message: 'Error saving data. Please try again later.' });
  }
});



app.post('/api/register', async (req, res) => {
  const { name, sapId, branch, year, gender, email, description} = req.body;


  if (!name || !sapId || !branch || !year || !gender || !email || !description ) {
    console.log( name, sapId, branch, year, gender, email, description,"passed1")
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
   console.log( name, sapId, branch, year, gender, email, description,"passed2")
    const newRegistration = new Registration({
      name:name,
      sapId:sapId,
      branch:branch,
      year:year,
      gender:gender,
      email:email,
      description:description,  
      // eventId:req.body.eventId,
    });

 
    const savedRegistration = await newRegistration.save();

    res.status(201).json({ message: "Registration successful!", data: savedRegistration });
  } catch (error) {
    console.error('Error registering for the event:', error.message);
    res.status(500).json({ message: "Error registering for the event. Please try again later." });
  }
});



const PORT = process.env.PORT || 5000;
connectDb().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
