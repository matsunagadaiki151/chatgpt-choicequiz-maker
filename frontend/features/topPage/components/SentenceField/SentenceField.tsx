"use client";

import TextArea, { TTextArea } from "@/components/TextArea/TextArea";
import { useIsLoadingStore } from "@/features/topPage/stores/isLoadingState";
import React from "react";

type TSentenceField = Pick<TTextArea, "sentence" | "onSentenceChange">;

const SentenceField = ({ sentence, onSentenceChange }: TSentenceField) => {
  const isLoading = useIsLoadingStore((state) => state.isLoading);
  return (
    <TextArea
      sentence={sentence}
      onSentenceChange={onSentenceChange}
      readonly={isLoading}
    />
  );
};

export default SentenceField;
