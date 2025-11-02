import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import GlobalNavigationBar from "@/components/header";
import Footer from "@/components/footer";

const notoSansKr = Noto_Sans_KR({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"], // 필요에 따라 조정 가능
    variable: "--font-noto-sans-kr",
    display: "swap",
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
        className={`${notoSansKr.variable} antialiased`}
      >
      <GlobalNavigationBar />
        {children}
      <Footer />
      </body>
    </html>
  );
}
