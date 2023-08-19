"use client";

import Button from "@/components/Button/Button";
import SentenceField from "@/components/SententceField/SentenceField";
import { useRouter } from "next/navigation";
import { ChangeEvent, Suspense, useState } from "react";
import TopLoading from "../TopLoading/TopLoading";
import Loading from "@/components/Loading/Loading";
import { SENTENCE_LENGTH } from "../../const/layoutConstants";
import { useRecoilState, useSetRecoilState } from "recoil";
import { modelNameState } from "../../states/modelNameState";
import RadioTab from "@/components/RadioTab/RadioTab";
import { TModelName } from "../../types/QuizType";
import Warning from "../Warning/Warning";

const TopField = () => {
  const router = useRouter();
  const [sentence, SetSentence] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("GPT3.5Turbo");
  const [modelName, setModelName] = useRecoilState(modelNameState);

  const options = ["GPT3.5Turbo", "GPT3.5Turbo16K"];
  const modelDict: { [name: string]: TModelName } = {
    "GPT3.5Turbo": "gpt-3.5-turbo",
    "GPT3.5Turbo16K": "gpt-3.5-turbo-16k",
  };

  const topButtonClick = async () => {
    setIsLoading(true);
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
        <RadioTab
          options={options}
          selectedOption={selectedOption}
          onOptionChange={onModelOptionChange}
        />
        <SentenceField
          sentence={sentence}
          onSentenceChange={onSentenceChange}
        />
        <Button bgColor="blue" onButtonClick={topButtonClick}>
          問題を作成する
        </Button>
        <Warning sentence={sentence} selectedModelName={modelName} />
        {isLoading && (
          <Suspense fallback={<Loading />}>
            <TopLoading sentence={sentence} />
          </Suspense>
        )}
      </div>
    </>
  );
};

export default TopField;
