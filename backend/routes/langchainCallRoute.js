import express from "express";

const langchainCallRoute = express.Router();

//post to post to the fastapi langchain api
// Basic route to return a timestamp
langchainCallRoute.post("/langchainChat", (req, res) => {
  //call fastapi from this endpoint
  const date = new Date();
  let localTimeStamp = date.toLocaleString();
  localTimeStamp = localTimeStamp.replace(/\s/g, " ");
  res.json({ localTimeStamp });
});
