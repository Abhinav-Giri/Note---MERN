# Auth Routes:

POST /api/auth/register

{ "email": "test@example.com", "password": "123456" }


POST /api/auth/login

{ "email": "test@example.com", "password": "123456" }

Notes Routes (Auth Required)

POST /api/notes

{ "title": "My Note", "content": "This is secure content." }


GET /api/notes

PUT /api/notes/:id

{ "title": "Updated", "content": "Updated content." }


DELETE /api/notes/:id

# Secure Notes API

A RESTful API built with Node.js and Express for securely managing user notes with authentication.

##  Features

- User Registration & Login (JWT)
- Create, Read, Update, Delete Notes
- Token-based authentication
- Logger & Error Middleware
- MongoDB with Mongoose

##  Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT & Bcrypt
- dotenv, nodemon

##  Setup

```bash
npm install

npm run dev
