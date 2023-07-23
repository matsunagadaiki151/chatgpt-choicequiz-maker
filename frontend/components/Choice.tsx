import { TChoice } from "@/types/componentTypes";
import React, { useState } from "react";

const Choice = ({ options }: TChoice) => {
  const [selectedOption, setSelectedOption] = useState("これ");
  const onOptionChange = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <div>
      <form>
        {options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`option${index}`}
              name="options"
              value={option}
              checked={selectedOption === option}
              onChange={() => onOptionChange(option)}
            />
            <label htmlFor={`option${index}`} role="label">
              {option}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default Choice;
