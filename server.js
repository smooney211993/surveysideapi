const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
app.use(express.json());

app.get('/', (req, res) => {
  res.json('Server is running');
});
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

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
