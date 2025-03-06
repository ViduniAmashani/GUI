const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'EG5189@Viduni',
    database: 'salon_appointment_system'
});

connection.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Connected to MySQL database!');
    }
});

// Register User Endpoint
app.post('/register', (req, res) => {
    const { username, phone, email, password } = req.body;

    // Validate input
    if (!username || !phone || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Insert user into the database
    const query = 'INSERT INTO Users (username, phone_number, email, password) VALUES (?, ?, ?, ?)';
    connection.query(query, [username, phone, email, password], (err, results) => {
        if (err) {
            console.error('Error registering user:', err);
            return res.status(500).json({ message: 'Error registering user', error: err });
        }
        res.status(201).json({ message: 'User registered successfully' });
    });
});

// Login User Endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    // Check if the user exists in the database
    const query = 'SELECT * FROM Users WHERE username = ? AND password = ?';
    connection.query(query, [username, password], (err, results) => {
        if (err) {
            console.error('Error logging in:', err);
            return res.status(500).json({ message: 'Error logging in', error: err });
        }

        if (results.length > 0) {
            // User found, login successful
            res.status(200).json({ message: 'Login successful', user: results[0] });
        } else {
            // User not found or invalid credentials
            res.status(401).json({ message: 'Invalid username or password' });
        }
    });
});

// Book Appointment Endpoint
app.post('/book-appointment', (req, res) => {
    const { name, email, phone_number, date, time, service } = req.body;

    // Validate input
    if (!name || !email || !phone_number || !date || !time || !service) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Insert appointment into the database
    const query = 'INSERT INTO appointment (name, email, phone_number, appointment_date, appointment_time, service) VALUES (?, ?, ?, ?, ?, ?)';
    connection.query(query, [name, email, phone_number, date, time, service], (err, results) => {
        if (err) {
            console.error('Error booking appointment:', err);
            return res.status(500).json({ message: 'Error booking appointment', error: err });
        }
        res.status(201).json({ message: 'Appointment booked successfully' });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
