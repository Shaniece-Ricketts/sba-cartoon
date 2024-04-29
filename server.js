// server.js

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectToDb = require("./config/connectToDb");

// Import routes
const cartoonRoutes = require('./routes/cartoonRoutes');
const characterRoutes = require('./routes/characterRoutes');
const episodeRoutes = require('./routes/episodeRoutes');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Mount routes for User, Post, and Comment collections
app.use('/api', userRoutes);
app.use('/api', postRoutes);
app.use('/api', commentRoutes);

// Connect to MongoDB
connectToDb();

// Landing Page
app.get("/", (req, res) => {
  res.json("Welcome to the Cartoon API");
});

// Routes
app.use('/api', cartoonRoutes);
app.use('/api', characterRoutes);
app.use('/api', episodeRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
