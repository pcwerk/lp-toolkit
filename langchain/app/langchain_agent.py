# Logic for langchain
# Import requirements
from langchain.llms import OpenAI
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from langchain import HuggingFaceHub, LLMChain

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

#Create function to recieve input from user and use huggingface api, uses two functions
def huggingFaceConversation():
    #describing which llm to use
    hub_llm = HuggingFaceHub(repo_id="mrm8488/t5-base-finetuned-wikiSQL")
    #Template
    prompt = PromptTemplate(
        input_variables=['question'],
        template="Translate English to SQL: {question}"
        )
    #Creating the hub chain and return it
    hub_chain = LLMChain(prompt = prompt, llm = hub_llm, verbose=True)
    return hub_chain
#Process input with langchain and huggingface
def process_input(human_input: str) -> str:
    hub_chain = huggingFaceConversation()
    result = hub_chain.run(human_input)
    return result

#Process chat function
def huggingFaceChef():
    #describing which llm to use
    hub_llm = HuggingFaceHub(repo_id="flax-community/t5-recipe-generation")
    #Template
    prompt = PromptTemplate(
        input_variables=['question'],
        template="{question}"
        )
    #Creating the hub chain and return it
    hub_chain = LLMChain(prompt = prompt, llm = hub_llm, verbose=True)
    return hub_chain

def process_input_chef(human_input: str) -> str:
    hub_chain = huggingFaceChef()
    result = hub_chain.run(human_input)
    return result