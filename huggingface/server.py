from fastapi import FastAPI
from typing import Union
from pydantic import BaseModel
#Import functions from hf_agent
from hf_agent import process_input
from fastapi.middleware.cors import CORSMiddleware

#Input must be a string
class InputData(BaseModel):
    human_input: str

#Output must be a string
class OutputData(BaseModel):
    output: str

#Create app server
app = FastAPI()

#Origins for local host
origins = [
    "http://localhost:3000",
    "http://localhost:5050"
]

# Add the middeware so that the express server can connect with this one
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#Standard Get route 
@app.get("/")
def read_root():
    return {"Testing server hf_agent": "JSON DATA"}

#Endpoint for text input
@app.post("/processtext")
async def input(input_data: InputData):
    processed_output = process_input(input_data.human_input)
    return OutputData(output=processed_output)