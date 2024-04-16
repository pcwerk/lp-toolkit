import express from "express";
import cors from "cors";
import serverHealthRoutes from "./routes/serverHealthRoutes.js";
import langchainCallRoute from "./routes/langchainCallRoute.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Allow CORS only for specific origins (recommended for production)
const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:80"], // Replace this with your application's actual origin
};
app.use(cors(corsOptions));

const port = process.env.PORT || 5050;
const mongoURI =
  process.env.MONGO_URI || "mongodb://localhost:27017/lp-toolkit";
console.log("MONGO URI", mongoURI);
app.use("/serverHealthRoutes", serverHealthRoutes);
app.use("/langchainCallRoute", langchainCallRoute);

// This displays a message indicating that the server is running and listening to the specified port
app.listen(port, () => console.log(`Listening on port ${port}`));
