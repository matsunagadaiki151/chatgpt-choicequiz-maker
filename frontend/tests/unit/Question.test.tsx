// Question.test.tsx
import React from "react";
import { render } from "@testing-library/react";
import Question from "@/components/Question";
import "@testing-library/jest-dom";

describe("Questionコンポーネント", () => {
  const mockQuestion = {
    questionId: 1,
    questionSentent: "これはテスト用の問題文です。",
  };

  it("正しく問題文が表示される", () => {
    const { getByText } = render(<Question {...mockQuestion} />);
    const questionIdElement = getByText("問題1");
    const questionSentenceElement = getByText(mockQuestion.questionSentent);

    expect(questionIdElement).toBeInTheDocument();
    expect(questionSentenceElement).toBeInTheDocument();
  });
});
