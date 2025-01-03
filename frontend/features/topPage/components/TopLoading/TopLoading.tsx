"use client";

import useSWR from "swr";
import { useEffect, useState } from "react";
import { endpoint } from "@/libs/endpoint";
import { TLoading, TQuizData } from "@/features/quiz/types/QuizType";
import { getQuizFromSentence } from "@/features/topPage/api/getQuiz";
import { useIsLoadingStore } from "@/features/topPage/stores/isLoadingState";
import { useQuizListStore } from "@/stores/quizListState";
import { useQuizNumStore } from "@/stores/quizNumState";
import { useSelectedOptionsStore } from "@/stores/selectedOptionsState";
import { SELECTED_MODEL } from "../TopField/TopField";
import { useShallow } from "zustand/shallow";
import { useQuizIsCorrectStore } from "@/stores/quizIsCorrectState";

const fetcher = (url: string, { sentence, modelName, quizNum }: TQuizData) => {
  const quizzes = getQuizFromSentence(url, { sentence, modelName, quizNum });
  return quizzes;
};

const TopLoading = ({ sentence }: TLoading) => {
  const [is502Error, setIs502Error] = useState<boolean>(false);
  const [quizzes, setQuizzes] = useQuizListStore(
    useShallow((state) => [state.quizList, state.setQuizList])
  );

  const quizNum = useQuizNumStore((state) => state.quizNum);
  const setIsLoading = useIsLoadingStore((state) => state.setIsLoading);
  const setSelectedOptions = useSelectedOptionsStore(
    useShallow((state) => state.setSelectedOptions)
  );
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
  const setQuizIsCorrects = useQuizIsCorrectStore(
    (state) => state.setQuizIsCorrects
  );
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
