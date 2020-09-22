const express = require('express');
const router = express.Router();
const passport = require('passport');
const isAuth = require('../middleware/isAuth');

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
router.get('/google/callback', passport.authenticate('google'), (req, res) => {
  console.log(req.user);
});

router.get('/me', isAuth, (req, res) => {
  res.json(req.user);
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
