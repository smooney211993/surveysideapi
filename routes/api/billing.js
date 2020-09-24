const express = require('express');
const router = express.Router();
const isAuth = require('../../middleware/isAuth');
const keys = require('../../config');
const stripe = require('stripe')(keys.stripeSecretKey);
const User = require('../../models/User')

// recieving the token front the front end
router.post('/stripe', isAuth, async (req, res) => {
  const { id } = req.body;
  if (!req.body) {
    return res.status(400).json({ error: 'Payment Failed' });
  }
  try {
    const
    const charge = await stripe.charge.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: id,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
