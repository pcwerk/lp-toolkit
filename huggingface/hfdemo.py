from dotenv import load_dotenv
from langchain import HuggingFaceHub, LLMChain
from langchain.prompts import PromptTemplate


#Call env variable
load_dotenv()

#Create function to recieve input from the user

#describing which llm to use
hub_llm = HuggingFaceHub(repo_id="mrm8488/t5-base-finetuned-wikiSQL")

#Template
prompt = PromptTemplate(
    input_variables=['question'],
    template="Translate English to SQL: {question}"
)

hub_chain = LLMChain(prompt = prompt, llm = hub_llm, verbose=True)
print(hub_chain.run("what is the max age of the respondants who are female"))

