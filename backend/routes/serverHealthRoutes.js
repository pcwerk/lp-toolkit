import express from 'express';
const serverHealthRoutes = express.Router();

// Basic route to return a timestamp
app.get("/timestamp", (req, res) => {
    const date = new Date();
    let localTimeStamp = date.toLocaleString();
    localTimeStamp = localTimeStamp.replace(/\s/g, " ");
    res.json({ localTimeStamp });
});