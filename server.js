const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const passport = require('passport');
const mongoose = require('mongoose');
const connectDB = require('./config/db');

// passport config
require('./config/passport')(passport);

const auth = require('./api/auth');

connectDB();
app.use(express.json());

app.get('/', (req, res) => {
  res.json('Server is running');
});

app.use('/api/auth', auth);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
