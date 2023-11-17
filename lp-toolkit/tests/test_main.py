from fastapi.testclient import TestClient
from app.main import app  # Import your FastAPI app instance

client = TestClient(app)

def test_process_lang():
    response = client.post(
        "/process-lang",
        json={"human_input": "Hello, world!"}
    )
    assert response.status_code == 200
    data = response.json()
    assert "output" in data
    assert type(data["output"]) == str  