import "@app/styles/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import HeaderWidget from "@widgets/header";
import FooterWidget from "@widgets/footer";

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
        <HeaderWidget />
        {children}
        <FooterWidget isAuthenticated={false} />
      </body>
    </html>
  );
}
