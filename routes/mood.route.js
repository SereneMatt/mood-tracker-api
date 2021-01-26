const express = require('express');
const router = express.Router();

// Require the controllers
const mood_controller = require('../controllers/mood.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', mood_controller.test);
module.exports = router;