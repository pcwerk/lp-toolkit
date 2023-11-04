#Logic for langchain
#Import requirements
from langchain import OpenAI, ConversationChain, LLMChain, PromptTemplate

#Load in the enviroment variables
from dotenv import load_dotenv
load_dotenv()

#create function to recieve the input from user
def conversation(human_input):
    template = "You are a helpful assistant who"