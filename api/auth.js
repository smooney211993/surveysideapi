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
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    return res.redirect('http://localhost:3000/');
  }
);
router.get('/me', (req, res) => {
  if (!req.user) {
    return res.status(400).json({ error: 'You need to log in' });
  }
  res.send(req.user);
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
