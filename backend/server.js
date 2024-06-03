const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Mongoose Schema
const BookingSchema = new mongoose.Schema({
  carType: String,
  pickUp: String,
  dropOff: String,
  pickTime: String,
  dropTime: String,
  name: String,
  lastName: String,
  phone: String,
  age: String,
  email: String,
  address: String,
  city: String,
  zipcode: String,
});
const Booking = mongoose.model('Booking', BookingSchema);

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Middleware
app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
  res.send('');
});

// Routes
app.post('/api/bookings', async (req, res) => {
  try {
    const {
      carType,
      pickUp,
      dropOff,
      pickTime,
      dropTime,
      name,
      lastName,
      phone,
      age,
      email,
      address,
      city,
      zipcode,
    } = req.body;

    const booking = new Booking({
      carType,
      pickUp,
      dropOff,
      pickTime,
      dropTime,
      name,
      lastName,
      phone,
      age,
      email,
      address,
      city,
      zipcode,
    });

    await booking.save();

    console.log("New Booking:", booking); // Log new booking data

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Booking Confirmation',
      text: 'Your booking has been confirmed. Thank you for choosing us!',
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    res.status(201).json({ message: 'Booking created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// New route to get all bookings
app.get('/api/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find({});
    console.log("All Bookings:", bookings); // Log all bookings data
    res.status(200).json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
