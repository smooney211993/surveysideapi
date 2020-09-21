const express = require('express');
const router = express.Router();
const passport = require('passport');

// api/auth/google
//
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

// api/auth/google/callback
// after retrieved the code to get the profile
router.get('/google/callback', passport.authenticate('google'));
module.exports = router;
