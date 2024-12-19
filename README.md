
# Task Management System API

This is a backend API for an Event Management System built with Node.js, Express.js, and MongoDB. The API supports user authentication, event management and file uploads.


 - Deploy on Render: https://task-management-app-y8hw.onrender.com
____________________________________________________




## Tech Stack

- Node.js: JavaScript runtime.
- Express.js: Web framework for Node.js.
- MongoDB: NoSQL database.
- JWT: JSON Web Token for authentication.


## Features

- User registration and login with JWT-based authentication.
- Role-based access control (Admin and User roles).
- Task management:
  - Users can create, update, delete, and view their own tasks.
  - Admins can manage tasks for all users.
  - Password reset functionality with email support.
  - Rate limiting for login to prevent brute-force attacks.
  - Tasks with due dates, automatically marked as overdue when past the due date.
  - Advanced querying and sorting for tasks.
  - Task limits for regular users (max 10 tasks).


___________________________________________________


## Setup

1. Clone the Repository

```bash
 https://github.com/VaghaniAxita/Task_Management_App
```

2. Navigate to the Project Directory:

```bash
  cd backend  
```

3. Run the server:
```bash
  nodemon
```




# Routes

### User Authentication Routes
  
  **Register  User**

- Route: POST /auth/register
- Description: Register a new user
- Request Body:
```bash
  {
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}

```
- Sample Response:
  - Status: 201 Created
   - Body:
```bash
 {
 "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NjJkNDE1MTJlZGY0ZjU1M2ZiNTViMyIsImlhdCI6MTczNDUzMDExOSwiZXhwIjoxNzM3MTIyMTE5fQ.GuvWtrmShK-1v7hOfBmPvL1T74g3BT2varjMnStFEeg"
}
```

**User Login**

- Route: POST /auth/login
- Description:Login an existing user
- Request Body:
```bash
 {
  "email": "john.doe@example.com",
  "password": "password123"
}
```
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
 {
 "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NjJkNDE1MTJlZGY0ZjU1M2ZiNTViMyIsImlhdCI6MTczNDUzMDExOSwiZXhwIjoxNzM3MTIyMTE5fQ.GuvWtrmShK-1v7hOfBmPvL1T74g3BT2varjMnStFEeg"
}
```

**Get All Users**

- Route: GET /auth/users
- Description: Fetches all registered users.
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
 [
  {
    "id": "user_id_1",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "role": "User"
  },
  {
    "id": "user_id_2",
    "name": "Jane Admin",
    "email": "jane.admin@example.com",
    "role": "Admin"
  }
]
```

### Task  Routes

**Create Task**

- Route:POST /tasks
- Description: Users can create tasks
- Request Body:
```bash
 {
  "title": "Complete the project",
  "description": "Finish the backend API development",
  "dueDate": "2024-12-31"
}
```
- Sample Response:
  - Status: 201 Created
   - Body:
```bash
 {
  "id": "639b9d4e88d1f02463ef5678",
  "title": "Complete the project",
  "description": "Finish the backend API development",
  "status": "Pending",
  "dueDate": "2024-12-31",
  "user": "user_id_1"
}
```

**Get Tasks**
- Route: GET /tasks
- Description: Users can view their own tasks.
- Sample Response:
    - Status: 200 OK
    -  Body:
```bash
[
  {
    "id": "639b9d4e88d1f02463ef5678",
    "title": "Complete the project",
    "description": "Finish the backend API development",
    "status": "Pending",
    "dueDate": "2024-12-31",
    "user": "user_id_1"
  }
]
```

**Update Task**
- Route: PUT /tasks/:id
- Description:Users can update their own tasks.
- Request Body:
```bash
{
  "status": "Completed"
}
```
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
 {
  "id": "task_id_1",
  "title": "Complete the project",
  "description": "Finish the backend API development",
  "status": "Completed",
  "dueDate": "2024-12-31",
  "user": "user_id_1"
}
```

**Delete Task**
- Route: DELETE /tasks/:id
- Description:Users can delete their own tasks
- Sample Response:
   - Status: 200 OK
   - Body:
```bash
 {
  "message": "Task deleted successfully"
 }
```

###  Admin Routes

**Get All Tasks**
- Route: GET /admin/tasks
- Description: Admins can view all tasks from all users.
- Sample Response:
   - Status: 200 OK
   - Body:
```bash
 [
  {
    "id": "task_id_1",
    "title": "Complete the project",
    "description": "Finish the backend API development",
    "status": "Pending",
    "dueDate": "2024-12-31",
    "user": {
      "id": "user_id_1",
      "name": "John Doe",
      "email": "john.doe@example.com"
    }
  }
]
```

**Update Any Task**
- Route: PUT /admin/tasks/:id
- Description:Admins can update any task.
- Request Body:
```bash
{
  "status": "Completed"
}
```
- Sample Response:
   - Status: 200 OK
   - Body:
```bash
 {
  "id": "task_id_1",
  "title": "Complete the project",
  "description": "Finish the backend API development",
  "status": "Completed",
  "dueDate": "2024-12-31",
  "user": "user_id_1"
}
```

**Delete Any Task**
- Route: DELETE /admin/tasks/:id
- Description: Admins can delete any task.
- Sample Response:
   - Status: 200 OK
   - Body:
```bash
{
  "message": "Task deleted successfully"
}
```
  
## Sample Data

- Admin User:
```bash
{
  "name": "Jane Admin",
  "email": "jane.admin@example.com",
  "password": "admin123",
  "role": "Admin"
}
```
- Regular User:
```bash
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "user123",
  "role": "User"
}
```
  
