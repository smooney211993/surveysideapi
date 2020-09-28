const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
class Mailer extends helper.mail {
  constructor({ subject, recipients }, content) {
    super();
  }
}

module.exports = Mailer;
