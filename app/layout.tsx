import "@app/styles/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import RootProvider from "@app/providers/root.provider";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "AbeloHost Shop",
  description: "The official shop for AbeloHost services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" translate="no">
      <body className={inter.variable}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
