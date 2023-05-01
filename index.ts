import { OpenAI } from "langchain/llms/openai";

import * as dotenv from "dotenv";
dotenv.config();

const model = new OpenAI(
  {
    openAIApiKey: process.env.OPENAI_API_KEY,
    temperature: 0.9,
  },
  { organization: process.env.ORG_ID }
);

const run = async () => {
  const res = await model.call(
    "What would be a good company name a company that makes colorful socks?"
  );
  console.log(res);
};

run();
