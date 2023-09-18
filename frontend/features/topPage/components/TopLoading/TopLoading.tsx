"use client";

import useSWR from "swr";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { endpoint } from "@/libs/endpoint";
import { TLoading, TQuizData } from "@/features/quiz/types/QuizType";
import { getQuizFromSentence } from "@/features/topPage/api/getQuiz";
import { isLoadingState } from "@/features/topPage/stores/isLoadingState";
import { modelNameState } from "@/features/topPage/stores/modelNameState";
import { quizIsCorrectState } from "@/stores/quizIsCorrectState";
import { quizListState } from "@/stores/quizListState";
import { quizNumState } from "@/stores/quizNumState";
import { selectedOptionsState } from "@/stores/selectedOptionsState";

const fetcher = (url: string, { sentence, modelName, quizNum }: TQuizData) => {
  const quizzes = getQuizFromSentence(url, { sentence, modelName, quizNum });
  return quizzes;
};

const TopLoading = ({ sentence }: TLoading) => {
  const [is502Error, setIs502Error] = useState<boolean>(false);
  const [quizzes, setQuizzes] = useRecoilState(quizListState);

  const quizNum = useRecoilValue(quizNumState);
  const modelName = useRecoilValue(modelNameState);

  const setIsLoading = useSetRecoilState(isLoadingState);
  const setSelectedOptions = useSetRecoilState(selectedOptionsState);

  useEffect(() => {
    setIs502Error(false);
  }, []);

  const { data, error } = useSWR(
    quizzes === undefined
      ? [`${endpoint}/create`, sentence, modelName, quizNum]
      : null,
    ([url, sentence, modelName]) =>
      fetcher(url, { sentence, modelName, quizNum }),
    { suspense: true }
  );

  if (error) {
    console.log("エラー発生");
    setIs502Error(true);
  }
  const setQuizIsCorrects = useSetRecoilState(quizIsCorrectState);

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
