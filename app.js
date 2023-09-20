require('dotenv').config();
const express = require("express");
const http = require('http');

const app = express(); // Create an Express.js application

const port = process.env.PORT || 3000; // Define the port for your server, you can use an environment variable or a default value like 3000

const server = http.createServer(app); // Create an HTTP server using your Express app

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
