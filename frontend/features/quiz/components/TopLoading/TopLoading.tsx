"use client";

import useSWR from "swr";
import { getMockQuiz } from "../../api/getQuiz";
import { useSetRecoilState } from "recoil";
import { quizListState } from "../../states/quizListState";
import LinkButton from "@/components/LinkButton/LinkButton";
import { quizIsCorrectState } from "../../states/quizIsCorrectState";
import { useEffect } from "react";

const TopLoading = () => {
  const QUIZ_NUM = 5;
  const { data, error, isLoading } = useSWR(
    "http://localhost:8001/Items",
    getMockQuiz,
    { suspense: true }
  );

  const setQuizzes = useSetRecoilState(quizListState);
  const setQuizIsCorrects = useSetRecoilState(quizIsCorrectState);

  useEffect(() => {
    setQuizzes(data);
    setQuizIsCorrects(Array(QUIZ_NUM).fill(false));
  }, []);

  return (
    <>
      {isLoading || (
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
