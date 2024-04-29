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

//Update Temperature
langchainCallRoute.post("/updateTemperature", async (req, res) => {
  try {
    const temperature = req.body.data;
    const fastResponse = await axios.post(
      "http://langchain:8000/set-temperature",
      {
        new_temperature: temperature,
      }
    );
    res.json({
      message: "Temperature updated successfully",
      data: fastResponse.data,
    });
  } catch (error) {
    console.error("Error updating temperature", error);
    res.status(500).json({ error: "Failed to update temperature" });
  }
});

//Update Max_Token
// Endpoint to update token limit
langchainCallRoute.post("/updateTokenLimit", async (req, res) => {
  try {
    const tokenLimit = req.body.data;
    const fastResponse = await axios.post(
      "http://langchain:8000/set-token-limit",
      {
        token_limit: tokenLimit,
      }
    );
    res.json({
      message: "Token limit updated successfully",
      data: fastResponse.data,
    });
  } catch (error) {
    console.error("Error updating token limit", error);
    res.status(500).json({ error: "Failed to update token limit" });
  }
});

export default langchainCallRoute;
