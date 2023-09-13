"use client";

import TextArea, { TTextArea } from "@/components/TextArea/TextArea";
import { isLoadingState } from "@/features/quiz/stores/isLoadingState";
import { TQuestion } from "@/types/componentTypes";
import React, { ChangeEvent, useState } from "react";
import { useRecoilValue } from "recoil";

type TSentenceField = Pick<TTextArea, "sentence" | "onSentenceChange">;

const SentenceField = ({ sentence, onSentenceChange }: TSentenceField) => {
  const isLoading = useRecoilValue(isLoadingState);
  return (
    <TextArea
      sentence={sentence}
      onSentenceChange={onSentenceChange}
      readonly={isLoading}
    />
  );
};

export default SentenceField;
