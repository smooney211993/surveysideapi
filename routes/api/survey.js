const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Survey = require('../../models/Survey');
const isAuth = require('../../middleware/isAuth');
const requireCredits = require('../../middleware/requireCredits');
const Mailer = require('../../helpers/Mailer');
const content = require('../../helpers/EmailTemplate');

// create new survey
// cookie required
//api/survey/me
router.post(
  '/',
  isAuth,
  requireCredits,
  [
    body('title', 'Title is Required').not().isEmpty(),
    body('body', 'Body is required').not().isEmpty(),
    body('subject', 'Subject is Required').not().isEmpty(),
    body('recipients', 'Recipient is Required').not().isEmpty(),
  ],
  async (req, res) => {
    const { title, body, subject, recipients } = req.body;
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
        recipients: recipients
          .split(',')
          .map((email) => ({ email: email.trim() })),
        created: Date.now(),
      });
      const mailer = new Mailer(survey, content(survey));
      const mailerResponse = await mailer.send();
      if (mailerResponse.statusCode === 202) {
        await survey.save();
        req.user.credits -= 1;
        const user = await req.user.save();
        console.log(user.credits);
        return res.json({ user, survey });
      }
    } catch (error) {
      console.log(error);
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
  } catch (error) {
    console.log(error.message);
    res.status(500).json('Server Error');
  }
});

module.exports = router;
