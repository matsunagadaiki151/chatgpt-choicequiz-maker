import axios from "axios";
import { TResponse } from "@/types/pageParam";
import { convertNewLine } from "../hooks/quizUtil";

export const getQuizFromSentence = async (url: string, sentence: string) => {
  const convertedSentence = convertNewLine(sentence);
  const headData = {
    text: convertedSentence,
  };

  const res = await axios.post<TResponse>(url, headData);

  return res.data.Items;
};
