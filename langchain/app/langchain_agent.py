#Logic for langchain
#Import requirements
from langchain import OpenAI, ConversationChain, LLMChain, PromptTemplate

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
        llm=OpenAI(temperature=0),
        prompt=prompt,
        verbose=True,
    )

    output = chatgpt_chain.predict(human_input=human_input)
    return output