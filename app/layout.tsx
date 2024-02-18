import type { Metadata } from "next";
import { Sawarabi_Gothic } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import StoreProvider from "./storeProvider";

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
    <StoreProvider>
      <html lang="en" className="!scroll-smooth">
        <body
          className={`font-serif bg-gray-50 text-gray-950 pt-28 sm:pt-36 relative`}
        >
          <div className="bg-rose-100 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
          <div className="bg-blue-100 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

          <Header />
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
