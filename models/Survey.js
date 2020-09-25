const mongoose = require('mongoose');
const surveySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
});

module.exports = Survey = mongoose.model('Survey', surveySchema);
