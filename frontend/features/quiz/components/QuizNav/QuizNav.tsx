"use client";

import LinkButton from "@/components/LinkButton/LinkButton";
import { quizNumState } from "@/stores/quizNumState";
import { useRecoilValue } from "recoil";

type TQuizNav = {
  quizId: number;
  isDebug?: boolean;
};

function QuizNav({ quizId, isDebug = false }: TQuizNav) {
  const quizNum = useRecoilValue(quizNumState);
  const MIN_QUIZ_NUM = 1;
  const visiblePreviosLink =
    isDebug || quizId > MIN_QUIZ_NUM ? "" : "invisible";
  const visibleFinishLink = isDebug || quizId >= quizNum ? "" : "invisible";
  const visibleNextLink =
    isDebug || (quizId >= MIN_QUIZ_NUM && quizId < quizNum) ? "" : "invisible";
  return (
    <div className="font-marugo text-white flex justify-between">
      <div className={visiblePreviosLink} role="previuos">
        <LinkButton
          bgColor="blue"
          size="medium"
          href={`/quiz/${Number(quizId) - 1}`}
        >
          ← 前の問題へ
        </LinkButton>
      </div>
      <div className={visibleFinishLink} role="finish">
        <LinkButton href="/result" size="medium" bgColor="orange">
          問題を終了する
        </LinkButton>
      </div>
      <div className={visibleNextLink} role="next">
        <LinkButton
          bgColor="blue"
          size="medium"
          href={`/quiz/${Number(quizId) + 1}`}
        >
          次の問題へ →
        </LinkButton>
      </div>
    </div>
  );
}

export default QuizNav;
