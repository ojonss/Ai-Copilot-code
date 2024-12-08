const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

// Add a new contact
router.post('/add', async (req, res) => {
  const { name, emails, phoneNumbers } = req.body;
  const contact = new Contact({ name, emails, phoneNumbers });
  await contact.save();
  res.send('Contact added successfully');
});

// Search contacts
router.get('/search', async (req, res) => {
  const { query } = req.query;
  const contacts = await Contact.find({
    $or: [
      { name: new RegExp(query, 'i') },
      { emails: new RegExp(query, 'i') },
      { phoneNumbers: new RegExp(query, 'i') }
    ]
  });
  res.json(contacts);
});

module.exports = router;