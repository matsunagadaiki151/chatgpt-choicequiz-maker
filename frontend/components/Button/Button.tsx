import React from "react";
import { TButton } from "@/types/componentTypes";

/**
 * Primary UI component for user interaction
 */
const Button = ({ bgColor, onButtonClick, children }: TButton) => {
  const bgColorVariants = {
    blue: "bg-blue-500",
    orange: "bg-orange-500",
    green: "bg-green-500",
  };
  return (
    <button
      onClick={onButtonClick}
      className={`${bgColorVariants[bgColor]} text-white font-marugo rounded-xl py-2 px-6`}
    >
      {children}
    </button>
  );
};

export default Button;
