#Logic for langchain
#Import requirements
from langchain.llms import OpenAI
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from langchain import HuggingFaceHub, LLMChain


#Load in the enviroment variables
from dotenv import load_dotenv
load_dotenv()

#create function to recieve the input from user and user OPENAI api
def conversation(human_input):
    template = f"{human_input}\nAssistant:"

    prompt = PromptTemplate(
        input_variables=["human_input"],
        template=template
    )

    chatgpt_chain = LLMChain(
        llm=OpenAI(model_name="gpt-3.5-turbo-instruct",temperature=0.5),
        prompt=prompt,
        verbose=True,
    )

    output = chatgpt_chain.predict(human_input=human_input)
    return output

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