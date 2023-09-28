import React from "react";
import { render, fireEvent } from "@testing-library/react";
import RadioTab from "./RadioTab";

describe("RadioTab", () => {
  const options = ["Option 1", "Option 2", "Option 3"];
  const selectedOption = "Option 2";
  const onOptionChange = jest.fn();

  it("renders options correctly", () => {
    const { getAllByText } = render(
      <RadioTab
        options={options}
        selectedOption={selectedOption}
        onOptionChange={onOptionChange}
        isLoading={true}
      />
    );

    const renderedOptions = getAllByText((content, element) =>
      options.includes(content)
    );
    expect(renderedOptions.length).toBe(options.length);
  });
});
