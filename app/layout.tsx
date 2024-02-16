import type { Metadata } from "next";
import { Sawarabi_Gothic } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const sawarabiGothic = Sawarabi_Gothic({
  weight: "400",
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "My portfolio",
  applicationName: "My portfolio",
  keywords: ["next.js", "react", "tailwind", "typescript"],
  creator: "Haixu Jin",
  description: "Working as frontend developer for almost 4 years.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sawarabiGothic.className} bg-gray-50 text-gray-950`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
