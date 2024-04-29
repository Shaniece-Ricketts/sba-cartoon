// controllers/cartoonController.js

const Cartoon = require('../models/cartoon');

// Controller for getting all cartoons
const getAllCartoons = async (req, res) => {
  try {
    const cartoons = await Cartoon.find();
    res.json(cartoons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller for getting a cartoon by ID
const getCartoonById = async (req, res) => {
  try {
    const cartoon = await Cartoon.findById(req.params.id);
    if (cartoon) {
      res.json(cartoon);
    } else {
      res.status(404).json({ message: 'Cartoon not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller for creating a new cartoon
const createCartoon = async (req, res) => {
  try {
    const cartoon = new Cartoon(req.body);
    const newCartoon = await cartoon.save();
    res.status(201).json(newCartoon);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller for updating a cartoon by ID
const updateCartoon = async (req, res) => {
  try {
    const cartoon = await Cartoon.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (cartoon) {
      res.json(cartoon);
    } else {
      res.status(404).json({ message: 'Cartoon not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller for deleting a cartoon by ID
const deleteCartoon = async (req, res) => {
  try {
    const deletedCartoon = await Cartoon.findByIdAndDelete(req.params.id);
    if (deletedCartoon) {
      res.json({ message: 'Cartoon deleted successfully' });
    } else {
      res.status(404).json({ message: 'Cartoon not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllCartoons,
  getCartoonById,
  createCartoon,
  updateCartoon,
  deleteCartoon
};
