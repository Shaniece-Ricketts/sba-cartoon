const mongoose = require('mongoose');

const episodeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true // Remove leading and trailing whitespaces
  },
  season: {
    type: Number,
    required: true,
    min: 1 // Minimum season number
  },
  episodeNumber: {
    type: Number,
    required: true,
    min: 1 // Minimum episode number
  },
  releaseDate: {
    type: Date,
    required: true
  },
  duration: {
    type: Number,
    required: true,
    min: 1 // Minimum duration in minutes
  },
  cartoon: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cartoon',
    required: true
  }
});

const Episode = mongoose.model('Episode', episodeSchema);

module.exports = Episode;
