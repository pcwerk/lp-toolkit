// Importing express
import express from "express";

const app = express();
const port = process.env.PORT || 5050;

//basic route to return a timestamp
app.get("/timestamp", (req, res) => {
  const date = new Date();
  let localTimeStamp = date.toLocaleString();
  localTimeStamp = localTimeStamp.replace(/\s/g, " ");
  res.json({ localTimeStamp });
});

// This displays a message indicating that the server is running and listening to the specified port
app.listen(port, () => console.log(`Listening on port ${port}`));
