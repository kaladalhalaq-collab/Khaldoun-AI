
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KHALDOUN AI | Intelligent Platform",
  description:
    "KHALDOUN AI - Your intelligent AI-powered platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
