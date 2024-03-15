from fastapi import FastAPI
from typing import Union
from pydantic import BaseModel

#Input must be a string
class InputData(BaseModel):
    human_input: str

#Output must be a string
class Output(BaseModel):
    output: str

#Create app server
app = FastAPI()

#Standard Get route 
@app.get("/")
def read_root():
    return {"Testing": "JSON DATA"}

#Endpoint for text input
@app.post("/processtext")
async def input(input: InputData):
    output = Output(output=conversation(input.human_input))
    return output