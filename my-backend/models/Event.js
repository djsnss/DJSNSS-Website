const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  eventImg: { type: String, required: true },
  eventDesc: { type: String, required: true },
  eventDate: { type: Date, required: true },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
