import { OpenAI } from "langchain/llms/openai";
import * as dotenv from "dotenv";
dotenv.config();

const model = new OpenAI({
  temperature: 0.9, //temp is creativity, 0 = Not creative/ 1 = really creative
});

const res = await model.call("What would be a good name for a soccer team?");

//log to console
console.log(res);
