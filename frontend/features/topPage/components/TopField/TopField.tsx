"use client";

import Button from "@/components/Button/Button";
import { ChangeEvent, Suspense, useEffect, useState } from "react";
import Loading from "@/components/Loading/Loading";
import { useRecoilState } from "recoil";
import Warning from "../Warning/Warning";
import { ErrorFallback } from "../TopLoading/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
import LinkButton from "@/components/LinkButton/LinkButton";
import ErrorMessage from "../TopLoading/ErrorMessage";
import { isLoadingState } from "@/features/topPage/stores/isLoadingState";
import { modelNameState } from "@/features/topPage/stores/modelNameState";
import { TModelName } from "@/features/quiz/types/QuizType";
import GPTSelector from "../GPTSelector/GPTSelector";
import SentenceField from "../SentenceField/SentenceField";
import { quizListState } from "@/stores/quizListState";
import TopLoading from "../TopLoading/TopLoading";
import QuizNumInput from "../QuizNumInput/QuizNumInput";
import Link from "next/link";

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
      <div className="w-3/4 md:w-1/2 m-auto flex flex-col space-y-5 md:space-y-10 items-center">
        <div className="text-2xl md:text-4xl text-bold font-marugo text-giray">
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
        <div className="flex flex-col items-center space-y-1">
          <Button bgColor="blue" onButtonClick={topButtonClick}>
            問題を作成する
          </Button>
          <div className="text-xs md:text-base flex flex-wrap justify-center">
            <span>「問題を作成する」ボタンをクリックしたことで</span>
            <span>
              <Link href="/term-of-service" className="basic-link">
                利用規約
              </Link>
            </span>
            <span>に同意したとみなします。</span>
          </div>
        </div>
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
          <div className="flex flex-col justify-between items-center space-y-2 md:space-y-4 text-xs md:text-base">
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
