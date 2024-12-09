import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Challenge | React Hook Form",
  description:
    "Comparação do React Hook form e a abordagem tradicional para formulários.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter} antialiased min-h-[100dvh]`}>{children}</body>
    </html>
  );
}
