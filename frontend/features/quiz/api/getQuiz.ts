import axios from "axios";
import { TQuiz } from "../types/QuizType";

export const getMockQuiz = async () => {
  const url = "http://localhost:8000/Items";
  const res = await axios.get(url);

  const data: TQuiz[] = res.data;
  return data;
};
