#Hugging Face Agent File

#Import Modules
from dotenv import load_dotenv
from langchain import HuggingFaceHub, LLMChain
from langchain.prompts import PromptTemplate


#Load Env variable
load_dotenv()

#Setup langhcain
def setup_langchain():
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

#Process input with langchain
def process_input(human_input: str) -> str:
    hub_chain = setup_langchain()
    result = hub_chain.run(human_input)
    return result


