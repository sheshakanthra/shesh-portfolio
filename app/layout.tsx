import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shesh | Frontend Developer",
  description: "Portfolio of Sheshakanth — frontend developer crafting modern web experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#02040a] text-slate-100 scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
