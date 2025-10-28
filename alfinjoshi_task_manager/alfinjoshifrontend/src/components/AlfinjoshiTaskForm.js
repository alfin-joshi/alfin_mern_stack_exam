import React, { useState, useEffect } from 'react';

const AlfinjoshiTaskForm = ({ onSubmit, editingTask, onCancelEdit }) => {
  const [alfinjoshiTitle, setAlfinjoshiTitle] = useState('');
  const [alfinjoshiDescription, setAlfinjoshiDescription] = useState('');
  const [alfinjoshiError, setAlfinjoshiError] = useState('');

  useEffect(() => {
    if (editingTask) {
      setAlfinjoshiTitle(editingTask.title);
      setAlfinjoshiDescription(editingTask.description || '');
    } else {
      setAlfinjoshiTitle('');
      setAlfinjoshiDescription('');
    }
  }, [editingTask]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlfinjoshiError('');

    if (!alfinjoshiTitle.trim()) {
      setAlfinjoshiError('Title is required');
      return;
    }

    if (alfinjoshiTitle.trim().length < 3) {
      setAlfinjoshiError('Title must be at least 3 characters long');
      return;
    }

    const taskData = {
      title: alfinjoshiTitle.trim(),
      description: alfinjoshiDescription.trim()
    };

    const result = editingTask 
      ? await onSubmit(editingTask._id, taskData)
      : await onSubmit(taskData);

    if (result.success) {
      setAlfinjoshiTitle('');
      setAlfinjoshiDescription('');
      setAlfinjoshiError('');
    } else {
      setAlfinjoshiError(result.message);
    }
  };

  const handleCancel = () => {
    setAlfinjoshiTitle('');
    setAlfinjoshiDescription('');
    setAlfinjoshiError('');
    onCancelEdit();
  };

  return (
    <div className="alfinjoshi-form-card">
      <h2>{editingTask ? '✏️ Edit Task' : '➕ Add New Task'}</h2>
      <form onSubmit={handleSubmit} className="alfinjoshi-form">
        <div className="alfinjoshi-form-group">
          <label htmlFor="title">Title *</label>
          <input
            type="text"
            id="title"
            value={alfinjoshiTitle}
            onChange={(e) => setAlfinjoshiTitle(e.target.value)}
            placeholder="Enter task title"
            className="alfinjoshi-input"
          />
        </div>

        <div className="alfinjoshi-form-group">
          <label htmlFor="description">Description (Optional)</label>
          <textarea
            id="description"
            value={alfinjoshiDescription}
            onChange={(e) => setAlfinjoshiDescription(e.target.value)}
            placeholder="Enter task description"
            rows="3"
            className="alfinjoshi-textarea"
          />
        </div>

        {alfinjoshiError && (
          <div className="alfinjoshi-form-error">{alfinjoshiError}</div>
        )}

        <div className="alfinjoshi-form-buttons">
          <button type="submit" className="alfinjoshi-btn alfinjoshi-btn-primary">
            {editingTask ? 'Update Task' : 'Add Task'}
          </button>
          {editingTask && (
            <button 
              type="button" 
              onClick={handleCancel}
              className="alfinjoshi-btn alfinjoshi-btn-secondary"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AlfinjoshiTaskForm;