import React from "react";
import { TFooter } from "@/types/componentTypes";
import Link from "next/link";

/**
 * Primary UI component for user interaction
 */
const Footer = ({ author, createYear }: TFooter) => {
  return (
    <footer className="w-full bg-giray text-center items-center pt-6 pb-2 fixed bottom-0 left-0 mt-10">
      <div className="font-marugo text-white text-xs">
        {`${author} @${createYear}`}
      </div>
    </footer>
  );
};

export default Footer;
