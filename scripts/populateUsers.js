const mongoose = require('mongoose');
const User = require('../models/user');

// Connect to MongoDB
mongoose.connect(process.env.DB_URL);


const sampleUsers = [
  {
    username: 'user1',
    email: 'user1@example.com',
    password: 'password1'
  },
  {
    username: 'user2',
    email: 'user2@example.com',
    password: 'password2'
  },
  {
    username: 'user3',
    email: 'user3@example.com',
    password: 'password3'
  },
  {
    username: 'user4',
    email: 'user4@example.com',
    password: 'password4'
  },
  {
    username: 'user5',
    email: 'user5@example.com',
    password: 'password5'
  }
];

// Populate User collection with sample data
const populateUsers = async () => {
  try {
    await User.insertMany(sampleUsers);
    console.log('Users populated successfully');
  } catch (error) {
    console.error('Error populating users:', error);
  } finally {
    // Close MongoDB connection
    mongoose.disconnect();
  }
};

populateUsers();