const mongoose = require('mongoose');
const recipentSchema = new mongoose.Schema({
  email: {
    type: String,
  },
});

module.exports = RecipientSchema = mongoose.model('Recipient', recipentSchema);
