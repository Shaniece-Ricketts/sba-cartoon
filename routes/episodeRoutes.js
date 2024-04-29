const express = require('express');
const router = express.Router();
const EpisodeController = require('../controllers/episodeController');

// GET all episodes
router.get('/episodes', EpisodeController.getAllEpisodes);

// GET episode by ID
router.get('/episodes/:id', EpisodeController.getEpisodeById);

// POST new episode
router.post('/episodes', EpisodeController.createEpisode);

// PUT update episode by ID
router.put('/episodes/:id', EpisodeController.updateEpisode);

// DELETE episode by ID
router.delete('/episodes/:id', EpisodeController.deleteEpisode);

module.exports = router;

