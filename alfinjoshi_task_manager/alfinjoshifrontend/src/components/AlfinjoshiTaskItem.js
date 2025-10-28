import React from 'react';

const AlfinjoshiTaskItem = ({ task, onEdit, onDelete, onToggleStatus }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="alfinjoshi-task-item">
      <div className="alfinjoshi-task-header">
        <h3 className={task.status === 'Completed' ? 'completed-title' : ''}>
          {task.title}
        </h3>
        <span
          className={`alfinjoshi-status ${
            task.status === 'Completed' ? 'completed' : 'pending'
          }`}
        >
          {task.status}
        </span>
      </div>

      {task.description && (
        <p className="alfinjoshi-task-desc">{task.description}</p>
      )}

      <div className="alfinjoshi-task-footer">
        <span className="alfinjoshi-task-date">📅 {formatDate(task.createdAt)}</span>

        <div className="alfinjoshi-task-actions">
          <button
            onClick={() => onToggleStatus(task._id, task.status)}
            className="alfinjoshi-btn alfinjoshi-btn-toggle"
            title={task.status === 'Pending' ? 'Mark as Completed' : 'Mark as Pending'}
          >
            {task.status === 'Pending' ? '✓' : '↺'}
          </button>

          <button
            onClick={() => onEdit(task)}
            className="alfinjoshi-btn alfinjoshi-btn-edit"
            title="Edit Task"
          >
            ✏️
          </button>

          <button
            onClick={() => onDelete(task._id)}
            className="alfinjoshi-btn alfinjoshi-btn-delete"
            title="Delete Task"
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlfinjoshiTaskItem;
