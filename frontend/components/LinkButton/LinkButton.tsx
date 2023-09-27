import React from "react";
import { TLinkButton } from "@/types/componentTypes";
import Link from "next/link";

/**
 * Primary UI component for user interaction
 */

const LinkButton = ({
  bgColor,
  href,
  size = "medium",
  children,
}: TLinkButton) => {
  const bgColorVariants = {
    blue: "bg-blue-500",
    orange: "bg-orange-500",
    green: "bg-green-500",
  };

  const sizeVariants = {
    small: "py-2 px-4",
    medium: "py-2 px-3 md:py-4 md:px-6",
    large: "py-6 px-8",
  };
  return (
    <Link
      href={href}
      className={`${bgColorVariants[bgColor]} text-white font-marugo rounded-xl ${sizeVariants[size]}`}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
