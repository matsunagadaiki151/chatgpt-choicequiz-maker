"use client";

import Button from "@/components/Button/Button";
import SentenceField from "@/components/SententceField/SentenceField";
import { useRouter } from "next/navigation";
import { ChangeEvent, Suspense, useState } from "react";
import TopLoading from "../TopLoading/TopLoading";
import Loading from "@/components/Loading/Loading";
import { useRecoilState } from "recoil";
import { modelNameState } from "../../states/modelNameState";
import RadioTab from "@/components/RadioTab/RadioTab";
import { TModelName } from "../../types/QuizType";
import Warning from "../Warning/Warning";
import { ErrorFallback } from "../TopLoading/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
import LinkButton from "@/components/LinkButton/LinkButton";
import { quizListState } from "../../states/quizListState";
import { isLoadingState } from "../../states/isLoadingState";

const TopField = () => {
  const router = useRouter();
  const [sentence, SetSentence] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("GPT3.5Turbo");
  const [isLoading, setIsLoading] = useRecoilState<boolean>(isLoadingState);
  const [modelName, setModelName] = useRecoilState(modelNameState);
  const [quizzes, setQuizzes] = useRecoilState(quizListState);

  const options = ["GPT3.5Turbo", "GPT3.5Turbo16K"];
  const modelDict: { [name: string]: TModelName } = {
    "GPT3.5Turbo": "gpt-3.5-turbo",
    "GPT3.5Turbo16K": "gpt-3.5-turbo-16k",
  };

  useEffect(() => {
    setModelName("gpt-3.5-turbo");
    setQuizzes(undefined);
  }, []);

  const topButtonClick = async () => {
    setIsLoading(true);
  };

  const onSentenceChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    SetSentence(e.target.value);
    setIsLoading(false);
  };

  return (
    <>
      <div className="flex flex-col space-y-10 items-center">
        <div className="text-4xl text-bold font-marugo text-giray">
          問題を作ろう!!
        </div>
        <SentenceField
          sentence={sentence}
          onSentenceChange={onSentenceChange}
        />
        <Button bgColor="blue" onButtonClick={topButtonClick}>
          問題を作成する
        </Button>
        <div>
          <Warning sentence={sentence} selectedModelName={modelName} />
          {isLoading && (
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<Loading />}>
                <TopLoading sentence={sentence} />
              </Suspense>
            </ErrorBoundary>
          )}
        </div>
        {quizzes !== undefined && (
          <>
            <div className="flex flex-col justify-between items-center space-y-4">
              <div>クイズの作成が完了しました！！</div>
            </div>
            <LinkButton bgColor={"blue"} href="/quiz/1" size={"small"}>
              クイズを開始する
            </LinkButton>
          </>
        )}
      </div>
    </>
  );
};

export default TopField;
