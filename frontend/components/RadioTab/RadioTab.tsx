import { TRadioTab } from "@/types/componentTypes";

const RadioTab = ({ options, selectedOption, onOptionChange }: TRadioTab) => {
  return (
    <div className="w-full flex text-giray justify-center items-center font-marugo">
      {options.map((option) => (
        <label key={option} className="w-full">
          <input
            type="radio"
            value={option}
            checked={selectedOption === option}
            onChange={onOptionChange}
            className="hidden peer"
          />
          <div className="w-full border text-center py-2 px-12 hover:bg-slate-100 rounded-lg peer-checked:border-blue-400 peer-checked:border-2">
            {option}
          </div>
        </label>
      ))}
    </div>
  );
};

export default RadioTab;
