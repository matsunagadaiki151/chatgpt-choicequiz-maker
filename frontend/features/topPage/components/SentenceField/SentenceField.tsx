"use client";

import TextArea, { TTextArea } from "@/components/TextArea/TextArea";
import { isLoadingAtom } from "@/features/topPage/stores/isLoadingState";
import React from "react";
import { useAtom } from "jotai";

type TSentenceField = Pick<TTextArea, "sentence" | "onSentenceChange">;

const SentenceField = ({ sentence, onSentenceChange }: TSentenceField) => {
  const [isLoading, _] = useAtom(isLoadingAtom);
  return (
    <TextArea
      sentence={sentence}
      onSentenceChange={onSentenceChange}
      readonly={isLoading}
    />
  );
};

export default SentenceField;
