import express from "express";
import { LlamaCpp } from "@langchain/community/llms/llama_cpp";

const llamaCallRoute = express.Router();
const llamaPath = "/Replace/with/path/to/your/model/gguf-llama2-q4_0.bin";
const model = new LlamaCpp({ modelPath: llamaPath });

llamaCallRoute.post("/ask", async (req, res) => {
  try {
    const userInput = req.body.data;

    const llamaResponse = await model.invoke(userInput);

    res.json({ message: "Successful call to Llama", llamaResponse });

    return res;
  } catch (error) {
    console.error("Error calling FastAPI", error);
    res.status(500).json({ error: "Failed to call FastAPI" });
  }
});

export default llamaCallRoute;
