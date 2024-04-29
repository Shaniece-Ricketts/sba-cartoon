const Post = require('../models/post');

// Controller for fetching all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller for fetching a single post by ID
const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller for creating a new post
const createPost = async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  });
  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller for deleting post by ID
const deletePost = async (req, res) => {
    try {
      const deletedPost = await Post.findByIdAndDelete(req.params.id);
      if (deletedPost) {
        res.json({ message: 'Post deleted successfully' });
      } else {
        res.status(404).json({ message: 'Post not found' });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
};




// Controller for updating post by ID using PATCH
const updatePost = async (req, res) => {
    try {
      const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (updatedPost) {
        res.json(updatedPost);
      } else {
        res.status(404).json({ message: 'Post not found' });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Controller for replacing post by ID using PUT
  const replacePost = async (req, res) => {
    try {
      const replacedPost = await Post.findOneAndReplace({ _id: req.params.id }, req.body, { new: true });
      if (replacedPost) {
        res.json(replacedPost);
      } else {
        res.status(404).json({ message: 'Post not found' });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  module.exports = {
    updatePost,
    replacePost
  };
  