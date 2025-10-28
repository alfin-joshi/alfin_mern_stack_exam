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
<img width="1366" height="768" alt="Screenshot 2025-10-28 114313" src="https://github.com/user-attachments/assets/313d50e2-0800-4125-8918-437e9f3a8817" />
<img width="1366" height="768" alt="Screenshot 2025-10-28 114147" src="https://github.com/user-attachments/assets/3be88d86-0fcd-460f-b02b-0121e97df0be" />
<img width="1366" height="768" alt="Screenshot 2025-10-28 113605" src="https://github.com/user-attachments/assets/f96d0215-09ca-4e5a-b9e3-4f0ebd255d2b" />
<img width="1366" height="768" alt="Screenshot 2025-10-28 113502" src="https://github.com/user-attachments/assets/c02bbe31-ac20-408e-a31e-cc4b42fa906c" />
<img width="1366" height="768" alt="Screenshot 2025-10-28 113030" src="https://github.com/user-attachments/assets/d4bb89bf-3af8-4301-9442-3ecd5d08d011" />
<img width="1366" height="768" alt="Screenshot 2025-10-28 112335" src="https://github.com/user-attachments/assets/0ec67e60-acf8-456e-abda-b76fc7203bd4" />
<img width="1366" height="768" alt="Screenshot 2025-10-28 111812" src="https://github.com/user-attachments/assets/fdfd29af-31ba-41d5-95d5-3777b2ff5b81" />
<img width="1366" height="768" alt="Screenshot 2025-10-28 103945" src="https://github.com/user-attachments/assets/d8d69a1b-2096-4e0b-acc5-9aecbe6c0940" />
<img width="1366" height="768" alt="Screenshot 2025-10-28 103840" src="https://github.com/user-attachments/assets/d55b81a7-14a5-41a0-b99d-4420ddbb0af7" />
<img width="1366" height="768" alt="Screenshot 2025-10-28 103328" src="https://github.com/user-attachments/assets/059d901c-1d4d-4d50-821a-724636523cd2" />
