import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saob Work",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-cn">
      <body
        className={
          "p-0 m-0 bg-gray-100 min-h-screen flex justify-center " +
          inter.className
        }
      >
        {children}
      </body>
    </html>
  );
}
