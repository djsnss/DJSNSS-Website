const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sapId: { type: String, required: true },
  branch: { type: String, required: true },
  year: { type: String, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true },
  description: { type: String, required: true },
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' }, // Optional
});

const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;
