const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const PORT = 3000;
const MONGODB_URI = 'YOUR_MONGODB_URI'; // replace with your MongoDB URI

let db;

// Middleware
app.use(cors()); // Allows frontend to communicate with this server
app.use(bodyParser.json());

// Connect to MongoDB
MongoClient.connect(MONGODB_URI, { useUnifiedTopology: true }, (err, client) => {
    if (err) throw err;
    console.log('Connected to MongoDB');
    db = client.db('ai_chat'); // "ai_chat" is the database name
});

// Route to get AI response (replace the hardcoded response with your AI logic)
app.post('/get-response', (req, res) => {
    // You can log messages to the database here if you want
    res.json({ message: "AI: Thanks for the message!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
