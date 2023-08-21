"use client";

import useSWR from "swr";
import { getQuizFromSentence } from "../../api/getQuiz";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { quizListState } from "../../states/quizListState";
import LinkButton from "@/components/LinkButton/LinkButton";
import { quizIsCorrectState } from "../../states/quizIsCorrectState";
import { useEffect, useState } from "react";
import { TLoading } from "../../types/QuizType";
import { modelNameState } from "../../states/modelNameState";

const TopLoading = ({ sentence, setIsCreated }: TLoading) => {
  const [is502Error, setIs502Error] = useState<boolean>(false);

  useEffect(() => {
    setIs502Error(false);
  }, []);

  const fetcher = (url: string) => {
    return getQuizFromSentence(url, sentence, modelName);
  };

  const modelName = useRecoilValue(modelNameState);
  const QUIZ_NUM = 5;
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/create",
    fetcher,
    { suspense: true }
  );

  if (error) {
    console.log("エラー発生");
    setIs502Error(true);
  }

  if (!isLoading) {
    setIsCreated(true);
  }

  const setQuizzes = useSetRecoilState(quizListState);
  const setQuizIsCorrects = useSetRecoilState(quizIsCorrectState);

  useEffect(() => {
    console.log(is502Error);
    if (data !== undefined) {
      setQuizzes(data);
      setQuizIsCorrects(Array(QUIZ_NUM).fill(false));
    }
  }, []);

  return (
    <>
      {!isLoading && !is502Error && (
        <div className="flex flex-col justify-between items-center space-y-4">
          <div>クイズの作成が完了しました！！</div>
          <LinkButton bgColor={"blue"} href="/quiz/1" size={"small"}>
            クイズを開始する
          </LinkButton>
        </div>
      )}
    </>
  );
};

export default TopLoading;
