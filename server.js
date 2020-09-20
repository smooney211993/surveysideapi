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

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
