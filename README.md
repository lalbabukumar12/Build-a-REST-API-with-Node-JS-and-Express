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

This project is a simple introduction to building REST APIs using Node.js and Express. It helps beginners understand routing, middleware, POST requests, and sending/receiving JSON data..






# 🚀 REST API using Node.js and Express

## 📖 Description
This project is a simple REST API built using **Node.js** and **Express.js**.  
It demonstrates how to perform basic CRUD operations (Create, Read, Update, Delete) using HTTP methods.

---

## ⚙️ Features
- Create data using POST
- Fetch data using GET
- Update data using PUT and PATCH
- Delete data using DELETE
- JSON-based API responses

---

## 🛠️ Technologies Used
- Node.js  
- Express.js  
- JavaScript  
- Postman (for API testing)

---

## 🔹 HTTP Methods Explained

- **GET** → Used to fetch data from the server  
- **POST** → Used to send new data to the server  
- **PUT** → Used to update existing data completely  
- **PATCH** → Used to update data partially  
- **DELETE** → Used to remove data from the server  

---

## 🚀 Installation

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
▶️ Run the Project
node index.js

Server will run on:

http://localhost:3000
🔗 API Endpoints
Method	Endpoint	Description
GET	/users	Get all users
POST	/users	Create a new user
PUT	/users/:id	Update user بالكامل
PATCH	/users/:id	Update user partially
DELETE	/users/:id	Delete user
📬 Example Request
POST /users
{
  "name": "Lalu",
  "age": 21
}
📊 Output

The API returns data in JSON format along with status codes like:

200 → Success
201 → Created
404 → Not Found
📌 Conclusion

This project helps in understanding how REST APIs work using Node.js and Express. It covers all basic HTTP methods and CRUD operations.

👨‍💻 Author

Lalu Kumar
