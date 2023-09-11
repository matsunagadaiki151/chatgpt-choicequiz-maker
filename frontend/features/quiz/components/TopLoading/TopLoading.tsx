"use client";

import useSWR from "swr";
import { getQuizFromSentence } from "../../api/getQuiz";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { quizListState } from "../../states/quizListState";
import { quizIsCorrectState } from "../../states/quizIsCorrectState";
import { useEffect, useState } from "react";
import { TLoading, TModelName, TQuizData } from "../../types/QuizType";
import { modelNameState } from "../../states/modelNameState";
import { isLoadingState } from "../../states/isLoadingState";
import { selectedOptionsState } from "../../states/selectedOptionsState";
import { endpoint } from "@/libs/endpoint";
import { quizNumState } from "../../states/quizNumState";

const fetcher = (url: string, { sentence, modelName, quizNum }: TQuizData) => {
  const quizzes = getQuizFromSentence(url, { sentence, modelName, quizNum });
  return quizzes;
};

const TopLoading = ({ sentence }: TLoading) => {
  const [is502Error, setIs502Error] = useState<boolean>(false);
  const setIsLoading = useSetRecoilState(isLoadingState);
  const setSelectedOptions = useSetRecoilState(selectedOptionsState);
  const quizNum = useRecoilValue(quizNumState);

  useEffect(() => {
    setIs502Error(false);
  }, []);

  const modelName = useRecoilValue(modelNameState);
  const [quizzes, setQuizzes] = useRecoilState(quizListState);

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
