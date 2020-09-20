const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const auth = require('./api/auth');
app.use(express.json());

app.get('/', (req, res) => {
  res.json('Server is running');
});

app.use('/api/auth', auth);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
