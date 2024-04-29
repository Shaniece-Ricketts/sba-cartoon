const mongoose = require('mongoose');

const cartoonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true // Remove leading and trailing whitespaces
  },
  year: {
    type: Number,
    required: true,
    min: 1900, // Minimum value for the year
    max: new Date().getFullYear() // Maximum value for the current year
  },
  genre: {
    type: String,
    required: true,
    enum: ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Sci-Fi', 'Other'] // Allowed values for genre
  }
});

const Cartoon = mongoose.model('Cartoon', cartoonSchema);

module.exports = Cartoon;
