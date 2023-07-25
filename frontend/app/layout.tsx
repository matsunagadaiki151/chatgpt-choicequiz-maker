import Header from "@/components/Header/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import {
  author,
  createYear,
  siteTitle,
} from "@/features/quiz/const/layoutConstants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "クイズメーカー",
  description: "技術記事からクイズを作成するよ!!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header title={siteTitle} />
        {children}
        <Footer author={author} createYear={createYear} />
      </body>
    </html>
  );
}
