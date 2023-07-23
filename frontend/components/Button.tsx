import React from "react";
import { TButton } from "@/types/componentTypes";

/**
 * Primary UI component for user interaction
 */
const Button = ({ bgColor, onButtonClick, children }: TButton) => {
  return (
    <button
      onClick={onButtonClick}
      className={`bg-${bgColor}-400 text-white font-marugo rounded-xl py-2 px-6`}
    >
      {children}
    </button>
  );
};

export default Button;
