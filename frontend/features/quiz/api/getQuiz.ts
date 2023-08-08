import axios from "axios";
import { TQuiz } from "../types/QuizType";
import { sleep } from "../hooks/timer";
import { TResponse } from "@/types/pageParam";

// export const getMockQuiz = async (url: string) => {
//   const res = await axios.get<TQuiz[]>(url);

//   await sleep(2000);

//   const data = res.data;
//   return data;
// };

export const getQuizFromSentence = async (url: string, sentence: string) => {
  const headData = {
    text: sentence,
  };

  const res = await axios.post<TResponse>(url, headData);

  return res.data.Items;
};
