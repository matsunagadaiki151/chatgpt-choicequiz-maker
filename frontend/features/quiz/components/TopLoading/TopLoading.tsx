"use client";

import useSWR from "swr";
import { getQuizFromSentence } from "../../api/getQuiz";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { quizListState } from "../../states/quizListState";
import { quizIsCorrectState } from "../../states/quizIsCorrectState";
import { useEffect, useState } from "react";
import { TLoading, TModelName } from "../../types/QuizType";
import { modelNameState } from "../../states/modelNameState";
import { isLoadingState } from "../../states/isLoadingState";
import { selectedOptionsState } from "../../states/selectedOptionsState";

const fetcher = (url: string, sentence: string, modelName: TModelName) => {
  const quizzes = getQuizFromSentence(url, sentence, modelName);
  return quizzes;
};

const TopLoading = ({ sentence }: TLoading) => {
  const [is502Error, setIs502Error] = useState<boolean>(false);
  const setIsLoading = useSetRecoilState(isLoadingState);
  const setSelectedOptions = useSetRecoilState(selectedOptionsState);

  useEffect(() => {
    setIs502Error(false);
  }, []);

  const modelName = useRecoilValue(modelNameState);
  const [quizzes, setQuizzes] = useRecoilState(quizListState);

  const QUIZ_NUM = 5;

  const { data, error } = useSWR(
    quizzes === undefined
      ? ["http://localhost:8000/create", sentence, modelName]
      : null,
    ([url, sentence, modelName]) => fetcher(url, sentence, modelName),
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
      setQuizIsCorrects(Array(QUIZ_NUM).fill(false));
      setSelectedOptions(Array(QUIZ_NUM).fill(""));
      setIsLoading(false);
    }
  }, []);

  return <>{!is502Error && <div></div>}</>;
};

export default TopLoading;
