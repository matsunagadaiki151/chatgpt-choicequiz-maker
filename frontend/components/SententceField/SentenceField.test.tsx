// Question.test.tsx
import React, { useState as useStateMock } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SentenceField from "./SentenceField";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("SentenceFieldコンポーネント", () => {
  test("テキストエリアが表示されること", () => {
    render(<SentenceField sentence="" onSentenceChange={() => {}} />);
    const textareaElement = screen.getByRole("textbox");
    expect(textareaElement).toBeInTheDocument();
  });

  test("テキストエリアの初期値が設定されていること", () => {
    const initialSentence = "初期値のテスト";
    render(
      <SentenceField sentence={initialSentence} onSentenceChange={() => {}} />
    );
    const textareaElement = screen.getByRole("textbox");
    expect(textareaElement).toHaveValue(initialSentence);
  });

  test("テキストエリアの入力が反映されること", () => {
    const initialSentence = "初期値のテスト";
    const newSentence = "新しいテキストを入力";
    const mockOnSentenceChange = jest.fn();

    render(
      <SentenceField
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
