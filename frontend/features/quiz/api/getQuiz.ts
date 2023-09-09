import axios, { AxiosError } from "axios";
import { TResponse } from "@/types/pageParam";
import { convertNewLine } from "../hooks/quizUtil";

export const getQuizFromSentence = async (
  url: string,
  sentence: string,
  modelName: string
) => {
  const convertedSentence = convertNewLine(sentence);
  const headData = {
    text: convertedSentence,
    model_name: modelName,
  };

  try {
    const res = await axios.post<TResponse>(url, headData, {
      headers: {
        withCredentials: true,
      },
    });
    return res.data.Items;
  } catch (error) {
    if (
      axios.isAxiosError(error) &&
      error.response &&
      error.response.status === 502
    ) {
      throw Error("");
    }
  }
};
