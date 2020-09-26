const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Survey = require('../../models/Survey');
const isAuth = require('../../middleware/isAuth');
const requireCredits = require('../../middleware/requireCredits');

// create new survey
// cookie required
//api/survey/me
router.post(
  '/',
  isAuth,
  requireCredits,
  [
    body('title', 'Title is required').not().isEmpty(),
    body('body', 'Body is required').not().isEmpty(),
    body('subject', 'Subject is required').not().isEmpty(),
    body('recipient', 'Recipient is required').not().isEmpty(),
  ],
  async (req, res) => {
    const { title, body, subject, recipient } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const survey = new Survey({
        user: req.user.id,
        title,
        body,
        subject,
        recipient: recipient
          .split(',')
          .map((email) => ({ email: email.trim() })),
      });
      await survey.save();
      res.json(survey);
    } catch (error) {
      console.log(error.message);
      res.status(500).json('Server Error');
    }
  }
);

// cookies needed
// api/survey/me
router.get('/me', isAuth, async (req, res) => {
  const { id } = req.user;
  try {
    const surveys = await Survey.find({ user: id }).populate('user', [
      'firstName',
      'lastName',
    ]);
    if (!surveys) {
      return res
        .status(400)
        .json({ msg: 'There are no surveys for this user' });
    }
    res.json(surveys);
    console.log(surveys);
  } catch (error) {
    console.log(error.message);
    res.status(500).json('Server Error');
  }
});

module.exports = router;
