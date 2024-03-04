const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5173;

let messages = [];

app.use(bodyParser.json());

// GET endpoint to retrieve all messages
app.get('/api/routes/messages', (req, res) => {
  res.json({
    messages: messages,
    totalMessages: messages.length
  });
});

// POST endpoint to add a new message
app.post('/api/routes/messages', (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }
  messages.push(message);
  res.json({
    message: 'Message added successfully',
    messages: messages,
    totalMessages: messages.length
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

