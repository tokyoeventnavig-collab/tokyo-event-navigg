import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "東京イベントナビ",
  description: "東京のイベントを探せるイベント情報サイト",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
