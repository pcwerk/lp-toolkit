from dotenv import load_dotenv
from langchain import HuggingFaceHub, LLMChain
from langchain.prompts import PromptTemplate


#Call env variable
load_dotenv()

#describing which llm to use
hub_llm = HuggingFaceHub(repo_id="mrm8488/t5-base-finetuned-wikiSQL")

#Template
prompt = PromptTemplate(
    input_variables=['question'],
    template="Translate English to SQL: {question}"
)

hub_chain = LLMChain(prompt = prompt, llm = hub_llm, verbose=True)
print(hub_chain.run("What is the average age of the respondants using a mobile device"))

