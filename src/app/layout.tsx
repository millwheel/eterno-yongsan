import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlobalNavigationBar from "@/components/gnb";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "에테르노 용산",
  description: "용산공원과 더파크사이드 서울 바로 옆 크라운호텔 부지에 에테르노 청담, 에테르노 압구정에 이어서 최상의 하이엔드 에테르노 용산에 새롭게 들어섭니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <GlobalNavigationBar />
        {children}
      </body>
    </html>
  );
}
