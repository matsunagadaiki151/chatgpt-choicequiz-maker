// QuizNav.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import QuizNav from "./QuizNav";
import "@testing-library/jest-dom";

test("QuizNav component renders correctly", () => {
  render(<QuizNav quizId={1} maxQuizNum={5} isDebug={false} />);
  // Check if the links are rendered correctly based on the provided props
  expect(screen.getByText("← 前の問題へ")).toBeInTheDocument();
  expect(screen.getByText("問題を終了する")).toBeInTheDocument();
  expect(screen.getByText("次の問題へ →")).toBeInTheDocument();
});

describe("ボタンの配置が正常か", () => {
  test("最初のページ", () => {
    render(<QuizNav quizId={1} maxQuizNum={5} isDebug={false} />);

    const previousLink = screen.queryByRole("previuos");
    const finshLink = screen.getByRole("finish");
    const nextLink = screen.getByRole("next");
    // Check if the previous link is not rendered on the first quiz
    expect(previousLink).toHaveClass("invisible");
    expect(finshLink).toHaveClass("invisible");
    expect(nextLink).not.toHaveClass("invisible");
  });

  test("中間ページ", () => {
    render(<QuizNav quizId={2} maxQuizNum={5} isDebug={false} />);

    // Check if the next link is not rendered on the last quiz
    const previousLink = screen.queryByRole("previuos");
    const finshLink = screen.getByRole("finish");
    const nextLink = screen.getByRole("next");
    // Check if the previous link is not rendered on the first quiz
    expect(previousLink).not.toHaveClass("invisible");
    expect(finshLink).toHaveClass("invisible");
    expect(nextLink).not.toHaveClass("invisible");
  });

  test("最後のページ", () => {
    render(<QuizNav quizId={5} maxQuizNum={5} isDebug={false} />);

    // Check if the next link is not rendered on the last quiz
    const previousLink = screen.queryByRole("previuos");
    const finshLink = screen.getByRole("finish");
    const nextLink = screen.getByRole("next");
    // Check if the previous link is not rendered on the first quiz
    expect(previousLink).not.toHaveClass("invisible");
    expect(finshLink).not.toHaveClass("invisible");
    expect(nextLink).toHaveClass("invisible");
  });
});

test("デバッグ時に全部のボタンが表示されるか", () => {
  render(<QuizNav quizId={3} maxQuizNum={5} isDebug={true} />);

  const previousLink = screen.queryByRole("previuos");
  const finshLink = screen.getByRole("finish");
  const nextLink = screen.getByRole("next");
  // Check if the previous link is not rendered on the first quiz
  expect(previousLink).not.toHaveClass("invisible");
  expect(finshLink).not.toHaveClass("invisible");
  expect(nextLink).not.toHaveClass("invisible");
});
