import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MyMsalProvider from "@/src/config/masl/MyMsalProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uno Platform",
  description: "Uno Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MyMsalProvider>{children}</MyMsalProvider>
      </body>
    </html>
  );
}
