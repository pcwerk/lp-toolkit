const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;
const MONGODB_URI = 'YOUR_MONGODB_URI'; // replace with your MongoDB URI

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

const messageSchema = new mongoose.Schema({
  userInput: String,
  aiResponse: String,
});

const Message = mongoose.model('Message', messageSchema);

// Middleware
app.use(cors()); // Allows frontend to communicate with this server
app.use(bodyParser.json());

// Route to get AI response
app.post('/get-response', async (req, res) => {
  const userInput = req.body.userInput;

  try {
    // Simulate AI processing and generate a response
    const aiResponse = "AI: Thanks for the message!"; // This should be replaced with actual AI logic

    // Store user input and AI response in MongoDB
    const message = new Message({ userInput, aiResponse });
    await message.save();

    res.json({ message: aiResponse });
  } catch (error) {
    console.error('Error handling the AI response:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
