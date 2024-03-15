from dotenv import load_dotenv
from langchain import HuggingFaceHub, LLMChain

#Call env variable
load_dotenv()

hub_llm = HuggingFaceHub(repo)