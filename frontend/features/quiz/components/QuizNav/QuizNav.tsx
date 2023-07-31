import LinkButton from "@/components/LinkButton/LinkButton";

type TQuizNav = {
  quizId: number;
  maxQuizNum: number;
  isDebug?: boolean;
};

function QuizNav({ quizId, maxQuizNum, isDebug = false }: TQuizNav) {
  const MIN_QUIZ_NUM = 1;
  const visiblePreviosLink =
    isDebug || quizId > MIN_QUIZ_NUM ? "" : "invisible";
  const visibleFinishLink = isDebug || quizId >= maxQuizNum ? "" : "invisible";
  const visibleNextLink =
    isDebug || (quizId >= MIN_QUIZ_NUM && quizId < maxQuizNum)
      ? ""
      : "invisible";
  return (
    <div className="font-marugo text-white flex justify-between">
      <div className={visiblePreviosLink} role="previuos">
        <LinkButton bgColor="blue" href={`/quiz/${Number(quizId) - 1}`}>
          ← 前の問題へ
        </LinkButton>
      </div>
      <div className={visibleFinishLink} role="finish">
        <LinkButton href="/result" bgColor="orange">
          問題を終了する
        </LinkButton>
      </div>
      <div className={visibleNextLink} role="next">
        <LinkButton bgColor="blue" href={`/quiz/${Number(quizId) + 1}`}>
          次の問題へ →
        </LinkButton>
      </div>
    </div>
  );
}

export default QuizNav;
