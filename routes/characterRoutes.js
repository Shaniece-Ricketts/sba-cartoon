const express = require('express');
const router = express.Router();
const CharacterController = require('../controllers/characterController');

// GET all characters
router.get('/characters', CharacterController.getAllCharacters);

// GET character by ID
router.get('/characters/:id', CharacterController.getCharacterById);

// POST new character
router.post('/characters', CharacterController.createCharacter);

// PUT update character by ID
router.put('/characters/:id', CharacterController.updateCharacter);

// DELETE character by ID
router.delete('/characters/:id', CharacterController.deleteCharacter);

module.exports = router;
