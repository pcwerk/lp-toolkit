from fastapi import FastAPI 
from pydantic import BaseModel #Data validation
from app.langchain_agent import conversation


#Input must be a string
class InputData(BaseModel):
    text: str
#Output must be a string
class Output(BaseModel):
    output: str

#Create FastAPI app
app = FastAPI()

#Endpoint for text input
@app.post("/process-lang")
async def input(input: InputData): #Take in the data as param
    output = Output(output=conversation(InputData.text))
    return output


#test to see if api works
@app.get("/")
def home():
    return {"Data": "Testing"}

#route for the conversation
@app.post("/conversation")
async def input():
    return {"Conversation": "Test"}