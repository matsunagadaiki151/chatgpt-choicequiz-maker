"use client";

import Button from "@/components/Button/Button";
import { ChangeEvent, Suspense, useEffect, useState } from "react";
import Loading from "@/components/Loading/Loading";
import Warning from "../Warning/Warning";
import { ErrorFallback } from "../TopLoading/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
import LinkButton from "@/components/LinkButton/LinkButton";
import ErrorMessage from "../TopLoading/ErrorMessage";
import { useIsLoadingStore } from "@/features/topPage/stores/isLoadingState";
import SentenceField from "../SentenceField/SentenceField";
import { useQuizListStore } from "@/stores/quizListState";
import TopLoading from "../TopLoading/TopLoading";
import QuizNumInput from "../QuizNumInput/QuizNumInput";
import { TModelName } from "@/features/quiz/types/QuizType";
import { useShallow } from "zustand/shallow";

// 現状はgpt-4o-miniで固定なので一旦定数として定義
export const SELECTED_MODEL: TModelName = "gpt-4o-mini";

const TopField = () => {
  const [hasMounted, setHasMounted] = useState<boolean>(false);
  const [sentence, SetSentence] = useState<string>("");
  const [isLoading, setIsLoading] = useIsLoadingStore(
    useShallow((state) => [state.isLoading, state.setIsLoading])
  );
  const [quizzes, setQuizzes] = useQuizListStore(
    useShallow((state) => [state.quizList, state.setQuizList])
  );
  const [occurError, setOccurError] = useState<boolean>(false);

  useEffect(() => {
    setHasMounted(true);
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

  return (
    <>
      <div className="w-1/2 m-auto flex flex-col space-y-10 items-center">
        <div className="text-4xl text-bold font-marugo text-giray">
          問題を作ろう!!
        </div>
        <SentenceField
          sentence={sentence}
          onSentenceChange={onSentenceChange}
        />
        <QuizNumInput />
        <Button bgColor="blue" onButtonClick={topButtonClick}>
          問題を作成する
        </Button>
        <div>
          <Warning sentence={sentence} />
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
