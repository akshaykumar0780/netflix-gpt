import { GEMINIAI_KEY } from "./Contants";

const { GoogleGenerativeAI } = require("@google/generative-ai");

export const genAI = new GoogleGenerativeAI(GEMINIAI_KEY);
