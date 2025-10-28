import React from 'react';
import AlfinjoshiTaskItem from './AlfinjoshiTaskItem';

const AlfinjoshiTaskList = ({ tasks, onEdit, onDelete, onToggleStatus }) => {
  if (tasks.length === 0) {
    return (
      <div className="alfinjoshi-no-tasks">
        📭 No tasks found. Add your first task!
      </div>
    );
  }

  return (
    <div className="alfinjoshi-task-list">
      <h2>📋 Task List ({tasks.length})</h2>
      <div className="alfinjoshi-task-container">
        {tasks.map((task) => (
          <AlfinjoshiTaskItem
            key={task._id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
            onToggleStatus={onToggleStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default AlfinjoshiTaskList;
