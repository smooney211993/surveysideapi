const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Survey = require('../../models/Survey');
const isAuth = require('../../middleware/isAuth');

// create new survey
// cookie required

router.post(
  '/survey',
  isAuth,
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
      const newSurvey = {
        user: req.user.id,
        title,
        body,
        subject,
        recipient: recipient
          .split(',')
          .map((email) => ({ email: email.trim() })),
      };
      const survey = new Survey(newSurvey);
      await survey.save();
      res.json(survey);
    } catch (error) {
      console.log(error.message);
      res.status(500).json('Server Error');
    }
  }
);

module.exports = router;
