import React from "react";
import { TFooter } from "@/types/componentTypes";
import Link from "next/link";

/**
 * Primary UI component for user interaction
 */
const Footer = ({ author, createYear }: TFooter) => {
  return (
    <footer className="w-full bg-giray flex justify-between text-center items-center mt-20 py-5 text-gray-100 font-marugo">
      <div className="ml-20">{`${author} @${createYear}`}</div>
      <div className="flex justify-center mr-20 space-x-6 ">
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
