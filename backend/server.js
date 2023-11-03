import express from "express";
import cors from "cors";
import serverHealthRoutes from "./routes/serverHealthRoutes.js";

const app = express();

// Allow CORS only for specific origins (recommended for production)
const corsOptions = {
  origin: "http://localhost:3000", // Replace this with your application's actual origin
};
app.use(cors(corsOptions));

const port = process.env.PORT || 5050;
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/lp-toolkit'
console.log("MONGO URI" , mongoURI)
app.use('/serverHealthRoutes', serverHealthRoutes);

// This displays a message indicating that the server is running and listening to the specified port
app.listen(port, () => console.log(`Listening on port ${port}`));
