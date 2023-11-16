import pytest
import sys
# sys.path.append('langchain/app/langchain_agent.py')
# sys.path.append('langchain/app/main.py')
from fastapi.testclient import TestClient
from ..app.main import app

client = TestClient(app)


# def test_successful_response():
#     response = client.post("/process-lang", json={"human_input": "Hello"})
#     assert response.status_code == 200
#     assert "output" in response.json()


# def test_output_format():
#     response = client.post("/process-lang", json={"human_input": "Hello"})
#     data = response.json()
#     assert isinstance(data, dict)
#     assert isinstance(data.get("output"), str)


# def test_invalid_input():
#     response = client.post("/process-lang", json={})
#     assert response.status_code == 422  # HTTP 422 Unprocessable Entity
