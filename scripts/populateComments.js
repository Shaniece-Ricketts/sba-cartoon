// Populate the Comment collection with sample data

const mongoose = require('mongoose');
const Comment = require('../models/comment');
const Post = require('../models/post');
const User = require('../models/user');

// Connect to MongoDB
mongoose.connect(process.env.DB_URL);

// Function to get a random user ID from the User collection
const getRandomUserId = async () => {
  const users = await User.find();
  const randomIndex = Math.floor(Math.random() * users.length);
  return users[randomIndex]._id;
};

// Function to get a random post ID from the Post collection
const getRandomPostId = async () => {
  const posts = await Post.find();
  const randomIndex = Math.floor(Math.random() * posts.length);
  return posts[randomIndex]._id;
};

// Sample comment data
const sampleComments = [
  {
    content: 'Sample comment for post 1'
  },
  {
    content: 'Sample comment for post 2'
  },
  {
    content: 'Sample comment for post 3'
  },
  {
    content: 'Sample comment for post 4'
  },
  {
    content: 'Sample comment for post 5'
  }
];

// Populate Comment collection with sample data
const populateComments = async () => {
  try {
    // Get random user ID and post ID for each comment
    const userIds = await Promise.all(sampleComments.map(() => getRandomUserId()));
    const postIds = await Promise.all(sampleComments.map(() => getRandomPostId()));

    // Create comment documents with random user IDs and post IDs
    const comments = sampleComments.map((comment, index) => ({
      ...comment,
      user: userIds[index],
      post: postIds[index]
    }));

    // Insert sample comments into the database
    await Comment.insertMany(comments);
    console.log('Comments populated successfully');
  } catch (error) {
    console.error('Error populating comments:', error);
  } finally {
    // Close MongoDB connection
    mongoose.disconnect();
  }
};

populateComments();
