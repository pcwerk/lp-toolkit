from fastapi import FastAPI
from typing import Union
from pydantic import BaseModel
#Import functions from hf_agent
from hf_agent import process_input

#Input must be a string
class InputData(BaseModel):
    human_input: str

#Output must be a string
class OutputData(BaseModel):
    output: str

#Create app server
app = FastAPI()

#Standard Get route 
@app.get("/")
def read_root():
    return {"Testing": "JSON DATA"}

#Endpoint for text input
@app.post("/processtext")
async def input(input_data: InputData):
    processed_output = process_input(input_data.human_input)
    return OutputData(output=processed_output)