"use client";

import { ReactNode } from "react";
import { RecoilRoot } from "recoil";
import { NextUIProvider } from "@nextui-org/react";

export default function AppProvider({ children }: { children: ReactNode }) {
  return (
    <NextUIProvider>
      <RecoilRoot>{children}</RecoilRoot>
    </NextUIProvider>
  );
}
