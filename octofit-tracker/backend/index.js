const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 8000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Sample data
const activities = [
  { id: 1, name: 'Running', duration: 30 },
  { id: 2, name: 'Cycling', duration: 45 },
];

// Routes
app.get('/activities', (req, res) => {
  res.json(activities);
});

app.post('/activities', (req, res) => {
  const newActivity = req.body;
  newActivity.id = activities.length + 1;
  activities.push(newActivity);
  res.status(201).json(newActivity);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});