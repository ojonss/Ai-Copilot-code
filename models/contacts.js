const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  emails: [String],
  phoneNumbers: [String]
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;