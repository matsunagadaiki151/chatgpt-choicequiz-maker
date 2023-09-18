import NumSelector from "@/components/NumSelector/NumSelector";
import { MAX_QUIZ_NUM } from "@/const/commonConstant";
import { quizNumState } from "@/stores/quizNumState";
import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";

const QuizNumInput = () => {
  const [quizNum, setQuizNum] = useRecoilState(quizNumState);
  const numChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const newQuizNum = parseInt(e.target.value);
    setQuizNum(newQuizNum);
  };

  const quizOptions = Array(MAX_QUIZ_NUM)
    .fill(0)
    .map((_, i) => ({
      value: i + 1,
      label: `${i + 1}問`,
    }));

  return (
    <NumSelector
      options={quizOptions}
      numChangeHandler={numChangeHandler}
      selectedValue={quizNum}
    />
  );
};

export default QuizNumInput;
