from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel  
from langchain_agent import conversation, set_temperature, set_token_limit

from fastapi.middleware.cors import CORSMiddleware


# Input must be a string
class InputData(BaseModel):
    human_input: str


class TemperatureData(BaseModel):
    new_temperature: float


class TokenLimitData(BaseModel):
    new_token_limit: int


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


@app.post("/process-lang")
async def input(input: InputData):  # Take in the Inputdata string as param
    # calls conversation function from langchain_agent
    output = Output(output=conversation(input.human_input))
    return output  # returns outpu


@app.post("/set-temperature")
async def update_temperature(temp_data: TemperatureData):
    try:
        set_temperature(temp_data.new_temperature)
        return {"message": "Temperature updated successfully"}
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))


@app.post("/set-token-limit")
async def update_token_limit(token_data: TokenLimitData):
    """Endpoint to set new token limit."""
    try:
        set_token_limit(token_data.new_token_limit)
        return {"message": "Token limit updated successfully"}
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))
    


#Endpoint for hugging face use
@app.post("/hfprocesstext")
async def input(input_data: InputData):
    processed_output = process_input(input_data.human_input)
    return Output(output=processed_output)
