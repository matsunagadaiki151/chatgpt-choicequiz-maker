// Question.test.tsx
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import NumSelector from "./NumSelector";
import { screen } from "@testing-library/dom";

describe("NumSelector¥", () => {
  test("クイズの数が正しく変更されるかどうかを確認する。", () => {
    const options = [1, 2, 3, 4, 5].map((i) => ({ value: i, label: `${i}問` }));
    const numChangeHandler = jest.fn();
    const { getByLabelText } = render(
      <NumSelector
        options={options}
        numChangeHandler={numChangeHandler}
        selectedValue={5}
      />
    );

    const label = getByLabelText("作成するクイズの数");
    const selectLabel = screen.getByDisplayValue<HTMLInputElement>("5問");

    expect(label).toBeInTheDocument();
    expect(selectLabel).toBeInTheDocument();

    fireEvent.change(selectLabel, { target: { value: 3 } });

    expect(numChangeHandler).toHaveBeenCalledTimes(1);
  });
});
