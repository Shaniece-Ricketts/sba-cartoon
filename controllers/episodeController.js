const Episode = require('../models/episode');

// Controller for getting all episodes
const getAllEpisodes = async (req, res) => {
  try {
    const episodes = await Episode.find();
    res.json(episodes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller for getting an episode by ID
const getEpisodeById = async (req, res) => {
  try {
    const episode = await Episode.findById(req.params.id);
    if (episode) {
      res.json(episode);
    } else {
      res.status(404).json({ message: 'Episode not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller for creating a new episode
const createEpisode = async (req, res) => {
  try {
    const episode = new Episode(req.body);
    const newEpisode = await episode.save();
    res.status(201).json(newEpisode);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller for updating an episode by ID
const updateEpisode = async (req, res) => {
  try {
    const episode = await Episode.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (episode) {
      res.json(episode);
    } else {
      res.status(404).json({ message: 'Episode not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller for deleting an episode by ID
const deleteEpisode = async (req, res) => {
  try {
    const deletedEpisode = await Episode.findByIdAndDelete(req.params.id);
    if (deletedEpisode) {
      res.json({ message: 'Episode deleted successfully' });
    } else {
      res.status(404).json({ message: 'Episode not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllEpisodes,
  getEpisodeById,
  createEpisode,
  updateEpisode,
  deleteEpisode
};
