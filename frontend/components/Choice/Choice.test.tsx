// Choice.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Choice from "@/components/Choice/Choice";
import "@testing-library/jest-dom";

// テスト用のオプションデータ
const testOptions = ["Option A", "Option B", "Option C", "Option D"];

test("選択肢が正しく表示される", () => {
  const onOptionChangeMock = jest.fn();
  // Choiceコンポーネントをレンダリング
  render(
    <Choice
      options={testOptions}
      selectedOption={testOptions[0]}
      onOptionChange={onOptionChangeMock}
    />
  );

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

test("onOptionChangeが呼び出されるか", () => {
  const onOptionChangeMock = jest.fn();

  render(
    <Choice
      options={testOptions}
      selectedOption={testOptions[0]}
      onOptionChange={onOptionChangeMock}
    />
  );

  const initialSelectedOption = screen.getByLabelText(testOptions[0]);
  expect(initialSelectedOption).toBeChecked();

  const newSelectedOption = testOptions[1];
  fireEvent.click(screen.getByLabelText(newSelectedOption));

  expect(onOptionChangeMock).toHaveBeenCalledTimes(1);
  expect(onOptionChangeMock).toHaveBeenCalledWith(newSelectedOption);
});
