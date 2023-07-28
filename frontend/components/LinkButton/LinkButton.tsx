import React from "react";
import { TLinkButton } from "@/types/componentTypes";
import Link from "next/link";

/**
 * Primary UI component for user interaction
 */
const LinkButton = ({ bgColor, href, children }: TLinkButton) => {
  const bgColorVariants = {
    blue: "bg-blue-500",
    orange: "bg-orange-500",
    green: "bg-green-500",
  };
  return (
    <Link
      href={href}
      className={`${bgColorVariants[bgColor]} text-white font-marugo rounded-xl py-2 px-6`}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
