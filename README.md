# 📝 Task Management Application

A full-stack task management app built with **React**, **Tailwind CSS**, **Node.js**, **Express**, and **MongoDB Atlas**. Users can register, log in, create, update, delete, and filter tasks with priority and completion status. The app also supports **JWT authentication** and **Dark Mode**.

---

## 🚀 Features

- ✅ User registration & login
- 🔐 JWT-based authentication
- 📋 Create, view, update, and delete tasks
- 🌓 Light/Dark mode toggle (available on every page)
- 🔍 Filter tasks by status (All, Active, Completed)
- ⚡ RESTful API backend with Express.js
- ☁️ MongoDB Atlas cloud database
- 🎨 Tailwind CSS for responsive, modern UI
- 💡 Custom React hooks for tasks and dark mode

---

## 📁 Project Structure

task-manager/
├── backend/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── server.js
│ └── .env
├── frontend/
│ ├── src/
│ ├── public/
│ ├── package.json
│ └── package-lock.json
├── README.md
└── package.json
---

## 🧠 Tech Stack

### Frontend:
- React (Functional components with hooks)
- Tailwind CSS
- React Router

### Backend:
- Node.js
- Express
- MongoDB Atlas (NoSQL)
- Mongoose
- JSON Web Token (JWT)
- dotenv, cors, bcryptjs

---

## 🛠️ Setup Instructions

1️⃣ Backend Setup

```bash
cd server
npm install

Create a .env file:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000

Start the backend:
npm run dev


2️⃣ Frontend Setup

cd client
npm install
npm run dev

🌐 API      Endpoints
Method	    Endpoint	            Description
POST	    /api/auth/register	    Register new user
POST	    /api/auth/login	        Login user (returns token)
GET	        /api/tasks	            Get user's tasks
POST	    /api/tasks	            Create a new task
PUT	        /api/tasks/:id	        Update task
DELETE	    /api/tasks/:id	        Delete task

Use Bearer Token in Authorization header for protected routes.

---
🔐 Auth Flow
Register/Login to receive a JWT.
Store the token in localStorage.
Attach Authorization: Bearer <token> to API requests.

---
🌑 Dark Mode
Toggle button available on every page.
Persists across sessions using localStorage.


🧪 Seed/Test Users
You can use Postman to register a few users and add tasks manually. Example:

{
  "email": "a@gmail.com",
  "password": "a"
}