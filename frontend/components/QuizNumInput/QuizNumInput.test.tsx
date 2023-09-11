// Question.test.tsx
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import QuizNumInput from "./QuizNumInput";
import { RecoilRoot } from "recoil";
import { screen } from "@testing-library/dom";

describe("QuizNumInput", () => {
  test("クイズの数が正しく変更されるかどうかを確認する。", () => {
    const { getByLabelText } = render(
      <RecoilRoot>
        <QuizNumInput />
      </RecoilRoot>
    );

    const label = getByLabelText("作成するクイズの数");

    const selectLabel = screen.getByDisplayValue<HTMLInputElement>("5問");

    fireEvent.change(selectLabel, { target: { value: 3 } });

    expect(selectLabel.value).toBe("3");
  });
});
