const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const alfinjoshiTaskRoutes = require('./routes/alfinjoshitasks');

const alfinjoshiApp = express();

// Middleware
alfinjoshiApp.use(cors());
alfinjoshiApp.use(express.json());
alfinjoshiApp.use(express.urlencoded({ extended: true }));

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/task_manager');
    console.log('✅ MongoDB connected successfully to task_manager database');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1);
  }
};

// Connect to Database
connectDB();

// Routes
alfinjoshiApp.use('/api/tasks', alfinjoshiTaskRoutes);

// Root route
alfinjoshiApp.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to Alfin Joshi Task Manager API',
    endpoints: {
      getAllTasks: 'GET /api/tasks',
      createTask: 'POST /api/tasks',
      updateTask: 'PUT /api/tasks/:id',
      deleteTask: 'DELETE /api/tasks/:id'
    }
  });
});

// Error handling middleware
alfinjoshiApp.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Something went wrong!',
    error: err.message 
  });
});

// Start Server
const PORT = process.env.PORT || 5000;
alfinjoshiApp.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

module.exports = alfinjoshiApp;