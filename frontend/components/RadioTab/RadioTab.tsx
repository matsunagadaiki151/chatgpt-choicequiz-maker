import { ChangeEvent } from "react";

export type TRadioTab = {
  options: string[];
  selectedOption: string;
  onOptionChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
};

const RadioTab = ({
  options,
  selectedOption,
  onOptionChange,
  isLoading,
}: TRadioTab) => {
  return (
    <div className="w-2/3 flex text-giray justify-center items-center font-marugo">
      <div className="w-2/3 flex text-giray justify-center items-center font-marugo">
        {options.map((option) => (
          <label key={option} className="w-full">
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={onOptionChange}
              disabled={isLoading}
              className="hidden peer"
            />
            <div className="w-full border text-center text-xs md:text-base px-3 py-2 md:px-12 hover:bg-slate-100 rounded-lg peer-checked:border-blue-400 peer-checked:border-2">
              {option}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioTab;
