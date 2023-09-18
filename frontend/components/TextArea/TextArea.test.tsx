// Question.test.tsx
import React, { useState as useStateMock } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TextArea from "./TextArea";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("TextAreaコンポーネント", () => {
  test("テキストエリアが表示されること", () => {
    render(<TextArea sentence="" onSentenceChange={() => {}} />);
    const textareaElement = screen.getByRole("textbox");
    expect(textareaElement).toBeInTheDocument();
  });

  test("テキストエリアの初期値が設定されていること", () => {
    const initialSentence = "初期値のテスト";
    render(<TextArea sentence={initialSentence} onSentenceChange={() => {}} />);
    const textareaElement = screen.getByRole("textbox");
    expect(textareaElement).toHaveValue(initialSentence);
  });

  test("テキストエリアの入力が反映されること", () => {
    const initialSentence = "初期値のテスト";
    const newSentence = "新しいテキストを入力";
    const mockOnSentenceChange = jest.fn();

    render(
      <TextArea
        sentence={initialSentence}
        onSentenceChange={mockOnSentenceChange}
      />
    );
    const textareaElement = screen.getByRole("textbox");

    fireEvent.change(textareaElement, { target: { value: newSentence } });

    // expect(textareaElement).toHaveValue(newSentence);
    expect(mockOnSentenceChange).toHaveBeenCalledTimes(1);
  });
});
