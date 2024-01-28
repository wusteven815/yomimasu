import { Noto_Sans } from "next/font/google";
import { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";

const font = Noto_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yomimasu",
  description: "A multimodal web reader and player",
};

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
