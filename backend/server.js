import express from "express";
import cors from "cors";

const app = express();

// Allow CORS only for specific origins (recommended for production)
const corsOptions = {
  origin: "http://localhost:3000", // Replace this with your application's actual origin
};
app.use(cors(corsOptions));

const port = process.env.PORT || 5050;



// This displays a message indicating that the server is running and listening to the specified port
app.listen(port, () => console.log(`Listening on port ${port}`));
