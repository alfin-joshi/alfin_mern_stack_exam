# Alfin Joshi's Task Manager - MERN Stack Application

A full-stack task management application built with MongoDB, Express.js, React.js, and Node.js.

## Features

✅ Create, Read, Update, and Delete tasks (CRUD operations)
✅ Mark tasks as Pending or Completed
✅ Filter tasks by status (All, Pending, Completed)
✅ Search tasks by title or description
✅ Real-time task count statistics
✅ Confirmation dialog before deleting tasks
✅ Responsive design with modern UI
✅ Input validation and error handling

## Tech Stack

**Frontend:**
- React.js
- Axios
- CSS3

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose

## Project Structure

```
task-manager/
├── alfinjoshibackend/
│   ├── models/
│   │   └── AlfinjoshiTask.js
│   ├── routes/
│   │   └── alfinjoshitasks.js
│   ├── alfinjoshiapp.js
│   ├── package.json
│   └── .env
└── alfinjoshifrontend/
    ├── src/
    │   ├── components/
    │   │   ├── AlfinjoshiTaskForm.js
    │   │   ├── AlfinjoshiTaskList.js
    │   │   └── AlfinjoshiTaskItem.js
    │   ├── App.js
    │   ├── App.css
    │   └── index.js
    └── package.json
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4 or higher)
- npm or yarn

### Backend Setup

1. Navigate to backend directory:
```bash
cd alfinjoshibackend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file with:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/task_manager
```

4. Start the server:
```bash
npm run dev
```

Server runs on: `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd alfinjoshifrontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the application:
```bash
npm start
```

Application runs on: `http://localhost:3000`

## API Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/tasks` | Create a new task |
| GET | `/api/tasks` | Get all tasks |
| PUT | `/api/tasks/:id` | Update a task by ID |
| DELETE | `/api/tasks/:id` | Delete a task by ID |

## API Request Examples

### Create Task
```json
POST /api/tasks
{
  "title": "Complete MERN Project",
  "description": "Build a full-stack task manager"
}
```

### Update Task
```json
PUT /api/tasks/:id
{
  "status": "Completed"
}
```

## Features Implemented

### Required Features:
- ✅ Full CRUD operations
- ✅ MongoDB database connection
- ✅ Task model with validation
- ✅ RESTful API routes
- ✅ React frontend with forms and lists
- ✅ Real-time updates without page reload
- ✅ Error handling and validation
- ✅ Clean folder structure
- ✅ Styled UI

### Bonus Features:
- ✅ Filter tasks by status
- ✅ Search functionality
- ✅ Task count statistics (Total, Pending, Completed)
- ✅ Delete confirmation dialog
- ✅ Responsive design

## Screenshots

[Add screenshots of your working application here]

## Author

**Alfin Joshi**

## License

This project is created for educational purposes.
