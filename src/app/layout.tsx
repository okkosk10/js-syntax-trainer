import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JS Syntax Trainer",
  description: "AI 기반 JavaScript 문법 훈련 플랫폼"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
