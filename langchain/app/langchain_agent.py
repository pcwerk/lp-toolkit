#Logic for langchain
#Import requirements
from langchain.llms import OpenAI
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate

#Load in the enviroment variables
from dotenv import load_dotenv
load_dotenv()

#create function to recieve the input from user
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