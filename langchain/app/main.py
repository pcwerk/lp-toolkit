from fastapi import FastAPI 
from pydantic import BaseModel #Data validation
from langchain_agent import conversation


#Input must be a string
class InputData(BaseModel):
    human_input: str
#Output must be a string
class Output(BaseModel):
    output: str

#Create FastAPI app
app = FastAPI()

#Endpoint for text input
@app.post("/process-lang")
async def input(input: InputData): #Take in the Inputdata string as param
    output = Output(output=conversation(input.human_input)) #calls conversation function from langchain_agent
    return output #returns output