const express = require('express');
const router = express.Router();
const AlfinjoshiTask = require('../models/AlfinjoshiTask');

// CREATE - POST /api/tasks
router.post('/', async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || title.trim().length === 0) {
      return res.status(400).json({ 
        success: false, 
        message: 'Title is required' 
      });
    }

    if (title.trim().length < 3) {
      return res.status(400).json({ 
        success: false, 
        message: 'Title must be at least 3 characters long' 
      });
    }

    const newTask = new AlfinjoshiTask({
      title: title.trim(),
      description: description ? description.trim() : ''
    });

    const savedTask = await newTask.save();
    
    res.status(201).json({ 
      success: true, 
      message: 'Task created successfully',
      data: savedTask 
    });
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error while creating task',
      error: error.message 
    });
  }
});

// READ - GET /api/tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await AlfinjoshiTask.find().sort({ createdAt: -1 });
    
    res.status(200).json({ 
      success: true, 
      count: tasks.length,
      data: tasks 
    });
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error while fetching tasks',
      error: error.message 
    });
  }
});

// UPDATE - PUT /api/tasks/:id
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;

    if (title && title.trim().length < 3) {
      return res.status(400).json({ 
        success: false, 
        message: 'Title must be at least 3 characters long' 
      });
    }

    if (status && !['Pending', 'Completed'].includes(status)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Status must be either Pending or Completed' 
      });
    }

    const updateData = {};
    if (title) updateData.title = title.trim();
    if (description !== undefined) updateData.description = description.trim();
    if (status) updateData.status = status;

    const updatedTask = await AlfinjoshiTask.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ 
        success: false, 
        message: 'Task not found' 
      });
    }

    res.status(200).json({ 
      success: true, 
      message: 'Task updated successfully',
      data: updatedTask 
    });
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error while updating task',
      error: error.message 
    });
  }
});

// DELETE - DELETE /api/tasks/:id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTask = await AlfinjoshiTask.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ 
        success: false, 
        message: 'Task not found' 
      });
    }

    res.status(200).json({ 
      success: true, 
      message: 'Task deleted successfully',
      data: deletedTask 
    });
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error while deleting task',
      error: error.message 
    });
  }
});

module.exports = router;