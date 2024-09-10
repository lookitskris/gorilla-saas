import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MyMsalProvider from "@/src/config/masl/MyMsalProvider";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gorilla Platform",
  description: "Gorilla Saas Platform Dash",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <InitColorSchemeScript attribute="class" />
        <MyMsalProvider>{children}</MyMsalProvider>
      </body>
    </html>
  );
}
