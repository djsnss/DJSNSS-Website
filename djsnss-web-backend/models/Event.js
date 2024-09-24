// models/Event.js
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sapId: { type: String, required: true },
  branch: { type: String, required: true },
  year: { type: String, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  description: { type: String, required: true },
}, { timestamps: true });

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
