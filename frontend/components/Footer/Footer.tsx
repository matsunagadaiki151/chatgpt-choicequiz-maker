import React from "react";
import { TFooter } from "@/types/componentTypes";
import Link from "next/link";

/**
 * Primary UI component for user interaction
 */
const Footer = ({ author, createYear }: TFooter) => {
  return (
    <footer className="w-full bg-giray flex justify-between text-center items-center text-xs md:text-base mt-5 md:mt-20 py-2 md:py-5 text-gray-100 font-marugo">
      <div className="ml-5 md:ml-20">{`${author} @${createYear}`}</div>
      <div className="flex flex-col mr-5 md:flex-row justify-center items-center md:items-center md:mr-20 space-y-1 md:space-y-0 md:space-x-6 ">
        <Link href="/disclaimer" className="hover:text-orange-300">
          免責事項
        </Link>
        <Link href="/term-of-service" className="hover:text-orange-300">
          利用規約
        </Link>
        <Link href="/privacy-policy" className="hover:text-orange-300">
          プライバシーポリシー
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
