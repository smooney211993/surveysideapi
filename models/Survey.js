const mongoose = require('mongoose');
const Recipient = require('./Recipient');
const surveySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
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
  yes: {
    type: Number,
    default: 0,
  },
  no: {
    type: Number,
    default: 0,
  },
  recipients: [Recipient],
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Survey = mongoose.model('Survey', surveySchema);
