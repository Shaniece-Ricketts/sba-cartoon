// models/user.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true // Enforce uniqueness
  },
  email: {
    type: String,
    required: true,
    unique: true, // Enforce uniqueness
    lowercase: true // Normalize email addresses to lowercase
  },
  password: {
    type: String,
    required: true
  }
});

// Add indexes
userSchema.index({ username: 1 });
userSchema.index({ email: 1 });

const User = mongoose.model('User', userSchema);

module.exports = User;
