import express from "express";
const langchainCallRoute = express.Router();
import axios from "axios";

langchainCallRoute.post("/ask", async (req, res) => {
  //call fastapi from this endpoint
  try {
    //get user input
    const userInput = req.body.data;

    //make request to fastapi server
    const fastResponse = await axios.post(
      "http://langchain:8000/process-lang",
      {
        human_input: userInput,
      }
    );

    //response from fastapi
    const dataFromFastapi = fastResponse.data;

    res.json({ message: "Successful call to FastAPI", dataFromFastapi });
  } catch (error) {
    console.error("Error calling FastAPI", error);
    res.status(500).json({ error: "Failed to call FastAPI" });
  }
});

//Endpoint for huggingfacecall
langchainCallRoute.post("/askhf", async (req, res) => {
  //call fastapi from this endpoint
  try {
    //get user input
    const userInput = req.body.data;

    //make request to fastapi server
    const fastResponse = await axios.post(
      "http://langchain:8000/hfprocesstext",
      {
        human_input: userInput,
      }
    );

    //response from fastapi
    const dataFromFastapi = fastResponse.data;

    res.json({ message: "Successful call to FastAPI", dataFromFastapi });
  } catch (error) {
    console.error("Error calling FastAPI", error);
    res.status(500).json({ error: "Failed to call FastAPI" });
  }
});

export default langchainCallRoute;
