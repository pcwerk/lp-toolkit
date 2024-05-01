# Logic for langchain
# Import requirements
from langchain.llms import OpenAI
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate

# Load in the enviroment variables
from dotenv import load_dotenv
load_dotenv()

# Global settings for temperature and token limit
settings = {
    "temperature": 0.7,
    "tokenLimit": 100
}

# create function to recieve the input from user


def conversation(human_input):
    """Generates a response from the AI model based on user input."""
    template = f"{human_input}\nAssistant:"

    prompt = PromptTemplate(
        input_variables=["human_input"],
        template=template
    )

    chatgpt_chain = LLMChain(
        llm=OpenAI(model_name="gpt-3.5-turbo-instruct",
                   temperature=settings["temperature"],
                   max_tokens=settings["tokenLimit"]),
        prompt=prompt,
        verbose=True,
    )

    output = chatgpt_chain.predict(human_input=human_input)
    return output


def set_temperature(new_temperature):
    """Sets a new temperature for the AI model."""
    global settings
    settings["temperature"] = new_temperature
    print(f"Temperature set to {new_temperature}")


def set_token_limit(new_token_limit):
    """Sets a new token limit for the AI model."""
    global settings
    settings["tokenLimit"] = new_token_limit
    print(f"Token limit set to {new_token_limit}")
