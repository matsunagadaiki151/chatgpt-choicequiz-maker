"use client";

import { isLoadingState } from "@/features/quiz/stores/isLoadingState";
import { TQuestion } from "@/types/componentTypes";
import React, { ChangeEvent, useState } from "react";
import { useRecoilValue } from "recoil";

type TSentenceField = {
  sentence: string;
  onSentenceChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

const SentenceField = ({ sentence, onSentenceChange }: TSentenceField) => {
  const isLoading = useRecoilValue(isLoadingState);
  return (
    <div className="max-w-2xl mx-auto">
      <textarea
        id="message"
        rows={10}
        cols={80}
        value={sentence}
        onChange={onSentenceChange}
        className="block p-2.5 w-full overflow-scroll resize-none text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="ネット上の技術系の記事をコピペしてください。"
        readOnly={isLoading}
      />
    </div>
  );
};

export default SentenceField;
