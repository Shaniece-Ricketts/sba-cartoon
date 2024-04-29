// Populate the Post collection with sample data

const mongoose = require('mongoose');
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

// Sample post data
const samplePosts = [
  {
    title: 'Post 1',
    content: 'Sample content for post 1'
  },
  {
    title: 'Post 2',
    content: 'Sample content for post 2'
  },
  {
    title: 'Post 3',
    content: 'Sample content for post 3'
  },
  {
    title: 'Post 4',
    content: 'Sample content for post 4'
  },
  {
    title: 'Post 5',
    content: 'Sample content for post 5'
  }
];

// Populate Post collection with sample data
const populatePosts = async () => {
  try {
    // Get random user ID for each post
    const userIds = await Promise.all(samplePosts.map(() => getRandomUserId()));

    // Create post documents with random user IDs
    const posts = samplePosts.map((post, index) => ({
      ...post,
      user: userIds[index]
    }));

    // Insert sample posts into the database
    await Post.insertMany(posts);
    console.log('Posts populated successfully');
  } catch (error) {
    console.error('Error populating posts:', error);
  } finally {
    // Close MongoDB connection
    mongoose.disconnect();
  }
};

populatePosts();
