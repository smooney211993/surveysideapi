const express = require('express');
const router = express.Router();
const passport = require('passport');
const isAuth = require('../../middleware/isAuth');

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
router.get('/me', isAuth, (req, res) => {
  res.send(req.user);
  console.log(req.user.id);
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
