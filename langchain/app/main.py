from fastapi import FastAPI 
from pydantic import BaseModel #Data validation
from langchain_agent import conversation
from fastapi.middleware.cors import CORSMiddleware


#Input must be a string
class InputData(BaseModel):
    human_input: str
#Output must be a string
class Output(BaseModel):
    output: str

#Create FastAPI app
app = FastAPI()

#origins for localhost
origins = [
    "http://localhost:3000",
    "localhost:3000"
    "<http://localhost>",
    "<http://localhost:5050>"
]

#Add the middeware so that the express server can connect with this one
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#Endpoint for text input
@app.post("/process-lang")
async def input(input: InputData): #Take in the Inputdata string as param
    output = Output(output=conversation(input.human_input)) #calls conversation function from langchain_agent
    return output #returns outpu