const express = require('express');
const router = express.router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken) => {
      console.log(accessToken);
    }
  )
);

router.get(
  '/',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);
