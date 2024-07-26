import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { NavBar } from "@/components/reusable";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "auction",
  description: "realtime car auction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
