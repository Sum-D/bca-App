<<<<<<< HEAD
// server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // for parsing JSON request bodies

// Sample route
app.get('/', (req, res) => {
  res.send('Hello from Express server!');
});

// Example API route
app.get('/api/data', (req, res) => {
  res.json({ message: 'This is data from the backend.' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
=======
// server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // for parsing JSON request bodies

// Sample route
app.get('/', (req, res) => {
  res.send('Hello from Express server!');
});

// Example API route
app.get('/api/data', (req, res) => {
  res.json({ message: 'This is data from the backend.' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
>>>>>>> c64b0557d0d063e6310f813d82875fd83a00b9df
