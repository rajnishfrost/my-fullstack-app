// backend/server.js
const express = require('express');
const path = require('path');
var cors = require("cors");
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())
// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/frontend/build')));

// Example API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!2' });
});

// Catch-all handler to serve React's index.html file
app.get('*' , (req , res) => {
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
