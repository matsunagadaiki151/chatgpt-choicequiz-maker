"use client";

import useSWR from "swr";
import { useEffect, useState } from "react";
import { endpoint } from "@/libs/endpoint";
import { TLoading, TQuizData } from "@/features/quiz/types/QuizType";
import { getQuizFromSentence } from "@/features/topPage/api/getQuiz";
import { isLoadingAtom } from "@/features/topPage/stores/isLoadingState";
import { quizIsCorrectAtom } from "@/stores/quizIsCorrectState";
import { quizListAtom } from "@/stores/quizListState";
import { quizNumAtom } from "@/stores/quizNumState";
import { selectedOptionsAtom } from "@/stores/selectedOptionsState";
import { SELECTED_MODEL } from "../TopField/TopField";
import { useAtom } from "jotai";

const fetcher = (url: string, { sentence, modelName, quizNum }: TQuizData) => {
  const quizzes = getQuizFromSentence(url, { sentence, modelName, quizNum });
  return quizzes;
};

const TopLoading = ({ sentence }: TLoading) => {
  const [is502Error, setIs502Error] = useState<boolean>(false);
  const [quizzes, setQuizzes] = useAtom(quizListAtom);

  const [quizNum] = useAtom(quizNumAtom);
  const [, setIsLoading] = useAtom(isLoadingAtom);
  const [, setSelectedOptions] = useAtom(selectedOptionsAtom);

  useEffect(() => {
    setIs502Error(false);
  }, []);

  const { data, error } = useSWR(
    quizzes === undefined
      ? [`${endpoint}/create`, sentence, SELECTED_MODEL, quizNum]
      : null,
    ([url, sentence, SELECTED_MODEL]) =>
      fetcher(url, { sentence, modelName: SELECTED_MODEL, quizNum }),
    { suspense: true }
  );

  if (error) {
    console.log("エラー発生");
    setIs502Error(true);
  }
  const [, setQuizIsCorrects] = useAtom(quizIsCorrectAtom);

  useEffect(() => {
    if (data !== undefined) {
      setQuizzes(data);
      setQuizIsCorrects(Array(quizNum).fill(false));
      setSelectedOptions(Array(quizNum).fill(""));
      setIsLoading(false);
    }
  }, []);

  return <>{!is502Error && <div></div>}</>;
};

export default TopLoading;
