from fastapi.testclient import TestClient
from langchain.app.main import app  # Import your FastAPI app instance

client = TestClient(app)
