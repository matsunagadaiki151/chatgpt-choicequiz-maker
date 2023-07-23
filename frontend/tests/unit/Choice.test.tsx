// Choice.test.js

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Choice from "@/components/Choice";
import "@testing-library/jest-dom";

// テスト用のオプションデータ
const testOptions = ["Option A", "Option B", "Option C", "Option D"];

test("選択肢が正しく表示される", () => {
  // Choiceコンポーネントをレンダリング
  render(<Choice options={testOptions} />);

  // ラジオボタンとラベルが正しく表示されていることを確認
  const radioButtons = screen.getAllByRole("radio");
  const labels = screen.getAllByRole("label");

  expect(radioButtons).toHaveLength(testOptions.length);
  expect(labels).toHaveLength(testOptions.length);

  testOptions.forEach((option, index) => {
    expect(radioButtons[index]).toBeInTheDocument();
    expect(labels[index]).toBeInTheDocument();
    expect(labels[index]).toHaveTextContent(option);
  });
});
