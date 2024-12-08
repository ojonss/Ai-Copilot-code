const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/contactbook', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());
app.use('/contacts', require('./routes/contacts'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});