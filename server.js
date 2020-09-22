const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const passport = require('passport');
const cookieSession = require('cookie-session');
const connectDB = require('./config/db');
const keys = require('./config/keys');

// passport config
require('./config/passport')(passport);
// route handlers
const auth = require('./api/auth');

connectDB();
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

app.get('/', (req, res) => {
  res.json('Server is running');
});

app.use('/api/auth', auth);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
