import axios from "axios";
import { TQuiz } from "../types/QuizType";
import { sleep } from "../hooks/timer";

export const getMockQuiz = async () => {
  const url = "http://localhost:8001/Items";
  const res = await axios.get<TQuiz[]>(url);

  await sleep(2000);

  const data = res.data;
  return data;
};
