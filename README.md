REST API with Node.js and Express

This project demonstrates how to build a simple REST API using Node.js and Express.js. It includes basic routes and explains how to handle POST requests to send data from the client to the server.

📌 Features

Simple and clean Express server setup

Handles JSON data using middleware

POST API to create new data

Basic validation and error handling

Beginner-friendly project structure
<img width="751" height="573" alt="Screenshot 2025-11-26 200326" src="https://github.com/user-attachments/assets/1ca20e7a-b79f-442f-8873-563dd9dd708c" />
<img width="986" height="586" alt="Screenshot 2025-11-26 200346" src="https://github.com/user-attachments/assets/585993a4-1c0c-4fb0-827a-21e41c9c206d" />


📁 Project Structure
project-folder/
│-- index.js
│-- package.json
│-- routes/
│     └── api.js

🚀 How to Run the Project

Install dependencies:

npm install


Start the server:

node index.js


Server runs on:

http://localhost:3000

📝 API Endpoints
POST /api/data

Send data to the server.

Request Body (JSON):

{
  "name": "John Doe",
  "email": "john@example.com"
}


Response Example:

{
  "message": "Data received successfully!",
  "data": {
    "name": "John Doe",
    "email": "john@example.com"
  }
}

📦 Example Code (POST Route)
app.post("/api/data", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "All fields are required" });
  }

  res.status(201).json({
    message: "Data received successfully!",
    data: req.body
  });
});

📚 Summary

This project is a simple introduction to building REST APIs using Node.js and Express. It helps beginners understand routing, middleware, POST requests, and sending/receiving JSON dat
