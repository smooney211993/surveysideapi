const express = require('express');
const router = express.Router();
const isAuth = require('../../middleware/isAuth');
const keys = require('../../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

// recieving the token front the front end
router.post('/stripe', isAuth, async (req, res) => {
  const { id } = req.body;
  if (!req.body) {
    return res.status(400).json({ error: 'Payment Failed' });
  }
  try {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: id,
    });
    if (charge.amount === 500) {
      req.user.credits += 5;
    }
    const user = await req.user.save();
    res.json(user.credits);
    console.log(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
