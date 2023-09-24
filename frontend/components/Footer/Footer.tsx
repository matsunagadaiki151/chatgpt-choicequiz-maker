import React from "react";
import { TFooter } from "@/types/componentTypes";

/**
 * Primary UI component for user interaction
 */
const Footer = ({ author, createYear }: TFooter) => {
  return (
    <footer className="w-full bg-giray text-center items-center pt-6 pb-2 mt-10">
      <div className="font-marugo text-white text-xs">
        {`${author} @${createYear}`}
      </div>
    </footer>
  );
};

export default Footer;
