const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const passport = require('passport');
const cookieSession = require('cookie-session');
const connectDB = require('./config/db');
const keys = require('./config/keys');
const cors = require('cors');

// passport config
require('./config/passport')(passport);
// route handlers
const auth = require('./routes/api/auth');
const billing = require('./routes/api/billing');

connectDB();
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

app.get('/', (req, res) => {
  res.json('Server is Running');
});

app.use('/api/auth', auth);
app.use('/api/billing', billing);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
