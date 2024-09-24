// routes/eventRoutes.js
const express = require('express');
const { registerEvent } = require('../controllers/eventController');

const router = express.Router();

// Register for an event
router.post('/', registerEvent);

module.exports = router;
