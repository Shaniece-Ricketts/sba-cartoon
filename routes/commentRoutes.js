const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/commentController');

// GET all comments
router.get('/comments', CommentController.getAllComments);

// GET comment by ID
router.get('/comments/:id', CommentController.getCommentById);

// POST create new comment
router.post('/comments', CommentController.createComment);

// PATCH route to update comment by ID
router.patch('/comments/:id', CommentController.updateComment);

// PUT route to replace comment by ID
router.put('/comments/:id', CommentController.replaceComment);

// DELETE route to delete comment by ID
router.delete('/comments/:id', CommentController.deleteComment);

module.exports = router;
