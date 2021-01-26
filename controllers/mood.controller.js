const mood = require('../models/mood.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
  res.send('Greetings from the Test controller!');
};