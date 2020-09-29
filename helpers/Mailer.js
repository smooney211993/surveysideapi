const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');
class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super();
    this.sgApi = sendgrid(keys.sendGridKey);
    this.from_email = new helper.Email('stephenmooney1993@gmail.com');
    this.subject = subject;
    this.body = new helper.Content('text/html', content);
    this.recipients = this.formatAddresses(recipients);

    this.addContent(this.body);
    // register the body with the email itself
    this.addClickTracking();
    // sendgrid replaces the links with their own to track the response
    this.addRecipients();
  }
  formatAddresses(recipients) {
    return recipients.map(({ email }) => new helper.Email(email));
  }
  // grabs the email from the array of objects in the subdoc and then format it with the email.helper
  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);
    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }
}

module.exports = Mailer;
