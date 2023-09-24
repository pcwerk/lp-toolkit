// Importing express
import express from 'express';

const app = express();
const port = process.env.PORT || 5050;

// This displays a message indicating that the server is running and listening to the specified port
app.listen(port, () => console.log(`Listening on port ${port}`));



