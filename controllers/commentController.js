// controllers/commentController.js

const Comment = require('../models/comment');

// Controller for fetching all comments
const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller for fetching a single comment by ID
const getCommentById = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (comment) {
      res.json(comment);
    } else {
      res.status(404).json({ message: 'Comment not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller for creating a new comment
const createComment = async (req, res) => {
  const comment = new Comment({
    content: req.body.content,
    author: req.body.author,
    post: req.body.post
  });
  try {
    const newComment = await comment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



// Controller for deleting comment by ID
const deleteComment = async (req, res) => {
    try {
      const deletedComment = await Comment.findByIdAndDelete(req.params.id);
      if (deletedComment) {
        res.json({ message: 'Comment deleted successfully' });
      } else {
        res.status(404).json({ message: 'Comment not found' });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

module.exports = {
  getAllComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment
};



// Controller for updating comment by ID using PATCH
const updateComment = async (req, res) => {
    try {
      const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (updatedComment) {
        res.json(updatedComment);
      } else {
        res.status(404).json({ message: 'Comment not found' });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Controller for replacing comment by ID using PUT
  const replaceComment = async (req, res) => {
    try {
      const replacedComment = await Comment.findOneAndReplace({ _id: req.params.id }, req.body, { new: true });
      if (replacedComment) {
        res.json(replacedComment);
      } else {
        res.status(404).json({ message: 'Comment not found' });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  module.exports = {
    updateComment,
    replaceComment
  };