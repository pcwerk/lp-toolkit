from fastapi import FastAPI
from pydantic import BaseModel  # Data validation
from langchain_agent import conversation
from fastapi.middleware.cors import CORSMiddleware
from langchain_agent import process_input


# Input must be a string
class InputData(BaseModel):
    human_input: str
# Output must be a string
class Output(BaseModel):
    output: str


# Create FastAPI app
app = FastAPI()

# origins for localhost

origins = [
    "http://localhost:3000",  # Correct format
    "http://localhost:5050",  # If you also want to allow this port
]


# Add the middeware so that the express server can connect with this one
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Endpoint for text input

#Endpoint for openAI use
@app.post("/process-lang")
async def input(input: InputData):  # Take in the Inputdata string as param
    # calls conversation function from langchain_agent
    output = Output(output=conversation(input.human_input))
    return output  # returns outpu

#Endpoint for HuggingFace Use
@app.post("/hfprocesstext")
async def input(input_data: InputData):
    processed_output = process_input(input_data.human_input)
    return Output(output=processed_output)