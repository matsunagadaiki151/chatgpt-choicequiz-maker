"use client";

import useSWR from "swr";
import { getQuizFromSentence } from "../../api/getQuiz";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { quizListState } from "../../states/quizListState";
import { quizIsCorrectState } from "../../states/quizIsCorrectState";
import { Suspense, useEffect, useState } from "react";
import { TLoading, TModelName } from "../../types/QuizType";
import { modelNameState } from "../../states/modelNameState";

const fetcher = (url: string, sentence: string, modelName: TModelName) => {
  const quizzes = getQuizFromSentence(url, sentence, modelName);
  return quizzes;
};

const TopLoading = ({ sentence }: TLoading) => {
  const [is502Error, setIs502Error] = useState<boolean>(false);

  useEffect(() => {
    setIs502Error(false);
  }, []);

  const modelName = useRecoilValue(modelNameState);
  const QUIZ_NUM = 5;
  const { data, error } = useSWR(
    ["http://localhost:8000/create", sentence, modelName],
    ([url, sentence, modelName]) => fetcher(url, sentence, modelName),
    { suspense: true }
  );

  if (error) {
    console.log("エラー発生");
    setIs502Error(true);
  }

  const setQuizzes = useSetRecoilState(quizListState);
  const setQuizIsCorrects = useSetRecoilState(quizIsCorrectState);

  useEffect(() => {
    if (data !== undefined) {
      setQuizzes(data);
      setQuizIsCorrects(Array(QUIZ_NUM).fill(false));
    }
  }, []);

  return (
    <>
      {!is502Error && (
        <div className="flex flex-col justify-between items-center space-y-4">
          <div>クイズの作成が完了しました！！</div>
        </div>
      )}
    </>
  );
};

export default TopLoading;
