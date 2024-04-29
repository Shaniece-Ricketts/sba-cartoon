const express = require('express');
const router = express.Router();
const CartoonController = require('../controllers/cartoonController');

// GET all cartoons
router.get('/cartoons', CartoonController.getAllCartoons);

// GET cartoon by ID
router.get('/cartoons/:id', CartoonController.getCartoonById);

// POST new cartoon
router.post('/cartoons', CartoonController.createCartoon);

// PUT update cartoon by ID
router.put('/cartoons/:id', CartoonController.updateCartoon);

// DELETE cartoon by ID
router.delete('/cartoons/:id', CartoonController.deleteCartoon);

module.exports = router;
