// controllers/characterController.js

const Character = require('../models/character');

// Controller for getting all characters
const getAllCharacters = async (req, res) => {
  try {
    const characters = await Character.find();
    res.json(characters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller for getting a character by ID
const getCharacterById = async (req, res) => {
  try {
    const character = await Character.findById(req.params.id);
    if (character) {
      res.json(character);
    } else {
      res.status(404).json({ message: 'Character not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller for creating a new character
const createCharacter = async (req, res) => {
  try {
    const character = new Character(req.body);
    const newCharacter = await character.save();
    res.status(201).json(newCharacter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller for updating a character by ID
const updateCharacter = async (req, res) => {
  try {
    const character = await Character.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (character) {
      res.json(character);
    } else {
      res.status(404).json({ message: 'Character not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller for deleting a character by ID
const deleteCharacter = async (req, res) => {
  try {
    const deletedCharacter = await Character.findByIdAndDelete(req.params.id);
    if (deletedCharacter) {
      res.json({ message: 'Character deleted successfully' });
    } else {
      res.status(404).json({ message: 'Character not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllCharacters,
  getCharacterById,
  createCharacter,
  updateCharacter,
  deleteCharacter
};
