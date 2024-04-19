#Import Modules
#from dotenv import load_dotenv
from huggingface_hub import hf_hub_download
from langchain_community.llms.huggingface_pipeline import HuggingFacePipeline
from langchain_core.prompts import PromptTemplate

#Model Loading
hf = HuggingFacePipeline.from_model_id(
    model_id='gpt2',
    task='text=generation',
    pipeline_kwargs={'max_new_tokens': 10},
)

#Create chain
template = """Question: {question}

Answer: Let's think step by step."""
prompt = PromptTemplate.from_template(template)

chain = prompt | hf

question = "What is the biggest country in the world?"
print(chain.invoke({"question": question}))





