import React from "react";
import { THeader } from "@/types/componentTypes";
import Link from "next/link";

/**
 * Primary UI component for user interaction
 */
const Header = ({ title }: THeader) => {
  return (
    <header className="w-full bg-giray text-center items-center p-4 mb-10">
      <Link href={"/"}>
        <div className="font-marugo text-white text-xl md:text-3xl m-auto">
          {title}
        </div>
      </Link>
    </header>
  );
};

export default Header;
