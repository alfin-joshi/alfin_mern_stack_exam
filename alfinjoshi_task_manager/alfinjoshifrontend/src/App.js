import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AlfinjoshiTaskForm from './components/AlfinjoshiTaskForm';
import AlfinjoshiTaskList from './components/AlfinjoshiTaskList';
import './App.css';

const ALFINJOSHI_API_URL = 'http://localhost:5000/api/tasks';

function App() {
  const [alfinjoshiTasks, setAlfinjoshiTasks] = useState([]);
  const [alfinjoshiLoading, setAlfinjoshiLoading] = useState(true);
  const [alfinjoshiError, setAlfinjoshiError] = useState(null);
  const [alfinjoshiEditingTask, setAlfinjoshiEditingTask] = useState(null);
  const [alfinjoshiFilter, setAlfinjoshiFilter] = useState('All');
  const [alfinjoshiSearchTerm, setAlfinjoshiSearchTerm] = useState('');

  // Fetch all tasks
  const fetchAlfinjoshiTasks = async () => {
    try {
      setAlfinjoshiLoading(true);
      const response = await axios.get(ALFINJOSHI_API_URL);
      setAlfinjoshiTasks(response.data.data);
      setAlfinjoshiError(null);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      setAlfinjoshiError('Failed to fetch tasks. Please try again.');
    } finally {
      setAlfinjoshiLoading(false);
    }
  };

  useEffect(() => {
    fetchAlfinjoshiTasks();
  }, []);

  // Create task
  const handleAlfinjoshiCreateTask = async (taskData) => {
    try {
      const response = await axios.post(ALFINJOSHI_API_URL, taskData);
      setAlfinjoshiTasks([response.data.data, ...alfinjoshiTasks]);
      return { success: true };
    } catch (error) {
      console.error('Error creating task:', error);
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to create task',
      };
    }
  };

  // Update task
  const handleAlfinjoshiUpdateTask = async (id, taskData) => {
    try {
      const response = await axios.put(`${ALFINJOSHI_API_URL}/${id}`, taskData);
      setAlfinjoshiTasks(
        alfinjoshiTasks.map((task) =>
          task._id === id ? response.data.data : task
        )
      );
      setAlfinjoshiEditingTask(null);
      return { success: true };
    } catch (error) {
      console.error('Error updating task:', error);
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to update task',
      };
    }
  };

  // Delete task
  const handleAlfinjoshiDeleteTask = async (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await axios.delete(`${ALFINJOSHI_API_URL}/${id}`);
        setAlfinjoshiTasks(alfinjoshiTasks.filter((task) => task._id !== id));
      } catch (error) {
        console.error('Error deleting task:', error);
        alert('Failed to delete task. Please try again.');
      }
    }
  };

  // Toggle task status
  const handleAlfinjoshiToggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === 'Pending' ? 'Completed' : 'Pending';
    await handleAlfinjoshiUpdateTask(id, { status: newStatus });
  };

  // Filter and search tasks
  const getFilteredTasks = () => {
    let filtered = alfinjoshiTasks;

    // Filter by status
    if (alfinjoshiFilter !== 'All') {
      filtered = filtered.filter((task) => task.status === alfinjoshiFilter);
    }

    // Search by title or description
    if (alfinjoshiSearchTerm) {
      filtered = filtered.filter(
        (task) =>
          task.title
            .toLowerCase()
            .includes(alfinjoshiSearchTerm.toLowerCase()) ||
          task.description
            .toLowerCase()
            .includes(alfinjoshiSearchTerm.toLowerCase())
      );
    }

    return filtered;
  };

  const filteredTasks = getFilteredTasks();
  const completedCount = alfinjoshiTasks.filter(
    (t) => t.status === 'Completed'
  ).length;
  const pendingCount = alfinjoshiTasks.filter(
    (t) => t.status === 'Pending'
  ).length;

  return (
    <div className="App">
      <header className="alfinjoshi-header">
        <h1>📝 Alfin Joshi's Task Manager</h1>
        <p>Organize your tasks efficiently</p>
      </header>

      {/* Statistics */}
      <div className="alfinjoshi-stats">
        <div>
          <strong>Total Tasks:</strong> {alfinjoshiTasks.length}
        </div>
        <div>
          <strong>Pending:</strong> {pendingCount}
        </div>
        <div>
          <strong>Completed:</strong> {completedCount}
        </div>
      </div>

      {/* Task Form */}
      <AlfinjoshiTaskForm
        onSubmit={
          alfinjoshiEditingTask
            ? (data) =>
                handleAlfinjoshiUpdateTask(alfinjoshiEditingTask._id, data)
            : handleAlfinjoshiCreateTask
        }
        editingTask={alfinjoshiEditingTask}
        onCancelEdit={() => setAlfinjoshiEditingTask(null)}
      />

      {/* Filter and Search */}
      <div className="alfinjoshi-filters">
        <label>
          Filter by Status:
          <select
            value={alfinjoshiFilter}
            onChange={(e) => setAlfinjoshiFilter(e.target.value)}
            className="alfinjoshi-select"
          >
            <option value="All">All Tasks</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </label>

        <label>
          Search:
          <input
            type="text"
            placeholder="Search tasks..."
            value={alfinjoshiSearchTerm}
            onChange={(e) => setAlfinjoshiSearchTerm(e.target.value)}
            className="alfinjoshi-input"
          />
        </label>
      </div>

      {/* Task List */}
      {alfinjoshiError && (
        <div className="alfinjoshi-error">{alfinjoshiError}</div>
      )}

      {alfinjoshiLoading ? (
        <p>Loading tasks...</p>
      ) : (
        <AlfinjoshiTaskList
          tasks={filteredTasks}
          onEdit={setAlfinjoshiEditingTask}
          onDelete={handleAlfinjoshiDeleteTask}
          onToggleStatus={handleAlfinjoshiToggleStatus}
        />
      )}
    </div>
  );
}

export default App;
