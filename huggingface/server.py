from fastapi import FastAPI
from typing import Union

#Create app server
app = FastAPI()

#Standard Get route 
@app.get("/")
def read_root():
    return {"Testing": "JSON DATA"}