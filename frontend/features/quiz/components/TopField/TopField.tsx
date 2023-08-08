"use client";

import Button from "@/components/Button/Button";
import SentenceField from "@/components/SententceField/SentenceField";
import { useRouter } from "next/navigation";
import { ChangeEvent, Suspense, useState } from "react";
import TopLoading from "../TopLoading/TopLoading";
import Loading from "@/components/Loading/Loading";
import { SENTENCE_LENGTH } from "../../const/layoutConstants";

const TopField = () => {
  const router = useRouter();
  const [sentence, SetSentence] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
        {sentence.length > SENTENCE_LENGTH ? (
          <div className="text-red-500">文章は3000文字以内にしてください。</div>
        ) : (
          isLoading && (
            <Suspense fallback={<Loading />}>
              <TopLoading sentence={sentence} />
            </Suspense>
          )
        )}
      </div>
    </>
  );
};

export default TopField;
