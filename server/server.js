
// server/server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');

const app = express();
const port = 5000;
const cors = require('cors');



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

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

// Handle other routes by serving the 'index.html' file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
