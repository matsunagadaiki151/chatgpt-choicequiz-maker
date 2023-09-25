// QuizNav.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import QuizNav from "./QuizNav";
import "@testing-library/jest-dom";
import { RecoilRoot } from "recoil";

test("QuizNav component renders correctly", () => {
  render(
    <RecoilRoot>
      <QuizNav quizId={1} isDebug={false} />
    </RecoilRoot>
  );
  // Check if the links are rendered correctly based on the provided props
  expect(screen.getByText("← 前の問題へ")).toBeInTheDocument();
  expect(screen.getByText("問題を終了する")).toBeInTheDocument();
  expect(screen.getByText("次の問題へ →")).toBeInTheDocument();
});

describe("ボタンの配置が正常か", () => {
  test("最初のページ", () => {
    render(
      <RecoilRoot>
        <QuizNav quizId={1} isDebug={false} />
      </RecoilRoot>
    );

    const previousLink = screen.queryByRole("previuos");
    const finshLink = screen.getByRole("finish");
    const nextLink = screen.getByRole("next");
    // Check if the previous link is not rendered on the first quiz
    expect(previousLink).toHaveClass("hidden");
    expect(finshLink).toHaveClass("hidden");
    expect(nextLink).not.toHaveClass("hidden");
  });

  test("中間ページ", () => {
    render(
      <RecoilRoot>
        <QuizNav quizId={2} isDebug={false} />
      </RecoilRoot>
    );

    // Check if the next link is not rendered on the last quiz
    const previousLink = screen.queryByRole("previuos");
    const finshLink = screen.getByRole("finish");
    const nextLink = screen.getByRole("next");
    // Check if the previous link is not rendered on the first quiz
    expect(previousLink).not.toHaveClass("hidden");
    expect(finshLink).toHaveClass("hidden");
    expect(nextLink).not.toHaveClass("hidden");
  });

  test("最後のページ", () => {
    render(
      <RecoilRoot>
        <QuizNav quizId={5} isDebug={false} />
      </RecoilRoot>
    );

    // Check if the next link is not rendered on the last quiz
    const previousLink = screen.queryByRole("previuos");
    const finshLink = screen.getByRole("finish");
    const nextLink = screen.getByRole("next");
    // Check if the previous link is not rendered on the first quiz
    expect(previousLink).not.toHaveClass("hidden");
    expect(finshLink).not.toHaveClass("hidden");
    expect(nextLink).toHaveClass("hidden");
  });
});

test("デバッグ時に全部のボタンが表示されるか", () => {
  render(
    <RecoilRoot>
      <QuizNav quizId={3} isDebug={true} />
    </RecoilRoot>
  );

  const previousLink = screen.queryByRole("previuos");
  const finshLink = screen.getByRole("finish");
  const nextLink = screen.getByRole("next");
  // Check if the previous link is not rendered on the first quiz
  expect(previousLink).not.toHaveClass("hidden");
  expect(finshLink).not.toHaveClass("hidden");
  expect(nextLink).not.toHaveClass("hidden");
});
