// models/character.js

const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  cartoon: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cartoon',
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;
