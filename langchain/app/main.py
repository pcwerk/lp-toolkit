#Create the FastAPI app
from fastapi import FastAPI 
app = FastAPI()

#pydantic for data validation
from pydantic import BaseModel
class InputData(BaseModel):
    text: str


#Endpoint for text input
@app.post("/process-lang")
async def process_lang(data: InputData): #Take in the data as param
    #Call OpenAI API, APIKEY
    




#test to see if api works
@app.get("/")
def home():
    return {"Data": "Testing"}

#route for the conversation
@app.post("/conversation")
async def input():
    return {"Conversation": "Test"}