"use client";

import Button from "@/components/Button/Button";
import SentenceField from "@/components/TextArea/TextArea";
import { ChangeEvent, Suspense, useEffect, useState } from "react";
import TopLoading from "../TopLoading/TopLoading";
import Loading from "@/components/Loading/Loading";
import { useRecoilState } from "recoil";
import Warning from "../Warning/Warning";
import { ErrorFallback } from "../TopLoading/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
import LinkButton from "@/components/LinkButton/LinkButton";
import ErrorMessage from "../TopLoading/ErrorMessage";
import QuizNumInput from "@/components/QuizNumInput/QuizNumInput";
import { isLoadingState } from "@/features/quiz/stores/isLoadingState";
import { modelNameState } from "@/features/quiz/stores/modelNameState";
import { quizListState } from "@/features/quiz/stores/quizListState";
import { TModelName } from "@/features/quiz/types/QuizType";
import GPTSelector from "../GPTSelector/GPTSelector";

const TopField = () => {
  const [hasMounted, setHasMounted] = useState<boolean>(false);
  const [sentence, SetSentence] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("GPT3.5Turbo");
  const [isLoading, setIsLoading] = useRecoilState<boolean>(isLoadingState);
  const [modelName, setModelName] = useRecoilState(modelNameState);
  const [quizzes, setQuizzes] = useRecoilState(quizListState);
  const [occurError, setOccurError] = useState<boolean>(false);

  const options = ["GPT3.5Turbo", "GPT3.5Turbo16K"];
  const modelDict: { [name: string]: TModelName } = {
    "GPT3.5Turbo": "gpt-3.5-turbo",
    "GPT3.5Turbo16K": "gpt-3.5-turbo-16k",
  };

  useEffect(() => {
    setHasMounted(true);
    setModelName("gpt-3.5-turbo");
    setQuizzes(undefined);
  }, []);

  const topButtonClick = async () => {
    setQuizzes(undefined);
    setIsLoading(true);
    setOccurError(false);
  };

  const onSentenceChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    SetSentence(e.target.value);
    setIsLoading(false);
  };

  const onModelOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    var value = e.target.value;
    setSelectedOption(value);
    setModelName(modelDict[e.target.value]);
  };

  return (
    <>
      <div className="w-1/2 m-auto flex flex-col space-y-10 items-center">
        <div className="text-4xl text-bold font-marugo text-giray">
          問題を作ろう!!
        </div>
        <GPTSelector
          options={options}
          selectedOption={selectedOption}
          onOptionChange={onModelOptionChange}
        />
        <SentenceField
          sentence={sentence}
          onSentenceChange={onSentenceChange}
        />
        <QuizNumInput />
        <Button bgColor="blue" onButtonClick={topButtonClick}>
          問題を作成する
        </Button>
        <div>
          <Warning sentence={sentence} selectedModelName={modelName} />
          {!occurError && (
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onError={() => {
                setIsLoading(false);
                setOccurError(true);
              }}
            >
              {isLoading && (
                <Suspense fallback={<Loading />}>
                  <TopLoading sentence={sentence} />
                </Suspense>
              )}
            </ErrorBoundary>
          )}
          {occurError && <ErrorMessage />}
        </div>
        {quizzes !== undefined && hasMounted && (
          <div className="flex flex-col justify-between items-center space-y-4">
            <div>クイズの作成が完了しました！！</div>
            <LinkButton bgColor={"blue"} href="/quiz/1" size={"small"}>
              クイズを開始する
            </LinkButton>
          </div>
        )}
      </div>
    </>
  );
};

export default TopField;
