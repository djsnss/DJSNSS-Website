const mongoose = require('mongoose');

const loginWorkSchema = new mongoose.Schema({
  name: { type: String, required: true },
  photo: { type: String, required: true },
  designation: { type: String, required: true },
  description: { type: String, required: true }
});

const LoginWork = mongoose.model('LoginWork', loginWorkSchema);

module.exports = LoginWork;
