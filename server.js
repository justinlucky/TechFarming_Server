const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 7000;

const mongoURI = 'mongodb+srv://TechFarming:TechFarming2002@techfarming.8my7o5p.mongodb.net/?retryWrites=true&w=majority';

MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  console.log('Connected to MongoDB');

  process.on('SIGINT', () => {
    client.close();
    process.exit();
  });
});

app.get('/', (req, res) => {
  res.send('Hello, MongoDB!');
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
