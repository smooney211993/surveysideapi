const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
  },

  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },
  credits: {
    type: Number,
    default: 0,
  },
});

module.exports = User = mongoose.model('user', UserSchema);
