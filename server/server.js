// server/server.js  (Documented)
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');

const app = express();
const port = 5000;
const cors = require('cors');

// Importing config.js using a relative path
const twilio = require('twilio'); 
const { accountSid, authToken } = require('./config');
const twilioClient = twilio(accountSid, authToken);

// MySQL connection configuration
const db = mysql.createConnection({
  host: 'localhost',
  user: 'ramesh_user',
  password: 'ramesh_pass',
  database: 'contact_details',
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL: ', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Middleware for parsing JSON
app.use(bodyParser.json());

app.use(cors())

// API endpoint for handling form submissions
app.post('/api/contact', (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  console.log("data received")

  // Insert data into MySQL database
  const sql = 'INSERT INTO contacts (firstName, lastName, email, message) VALUES (?, ?, ?, ?)';
  db.query(sql, [firstName, lastName, email, message], (err, result) => {
    if (err) {
      console.error('Error inserting data into MySQL: ', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Data inserted into MySQL:', result);
      res.status(200).send('Data inserted successfully');
    }
  });
});

//Demo request end point 
app.post('/api/make-call', (req, res) => {
  const { phoneNumber } = req.body;

  // we can adjust TWiML in the link 
  const twilioUrl = 'http://demo.twilio.com/docs/voice.xml';

  // Make a call using Twilio(refer Twilio Documentation)
  twilioClient.calls.create({
    url: twilioUrl,
    to: phoneNumber,
    from: '+17817134793',
  })
  .then(call => {
    console.log('Call initiated successfully:', call.sid);
    res.status(200).send('Call initiated successfully');
  })
  .catch(error => {
    console.error('Error initiating call:', error);
    res.status(500).send(`Error: ${error.message}`);
  });
});


app.use(express.static(path.join(__dirname, '../public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
