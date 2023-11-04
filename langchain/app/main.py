from fastapi import FastAPI

app = FastAPI()

#test to see if api works
@app.get("/")
def home():
    return {"Data": "Testing"}

#route for the conversation
@app.post("/conversation")
async def input():
    return {"Conversation": "Test"}