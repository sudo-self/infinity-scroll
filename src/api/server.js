// server.js
const express = require('express');
const mongoose = require('mongoose');
const Message = require('./models/Message');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/guestbook', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

// Routes
app.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find().sort('-timestamp');
    res.json(messages);
  } catch (err) {
    console.error('Error fetching messages:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/messages', async (req, res) => {
  try {
    const { content, author } = req.body;
    const message = new Message({ content, author });
    await message.save();
    res.status(201).json(message);
  } catch (err) {
    console.error('Error creating message:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
