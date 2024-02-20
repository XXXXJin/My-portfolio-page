import React from "react";
import SectionHeading from "./sectionHeading";

export default function Footer() {
  return (
    <footer className="mb-6 px-4 text-center text-gray-500 text-xs">
      <p className="mb-2">こちらのサイトでは以下の技術を使用しています。</p>
      <p>
        React, Next.js, Typescript, Redux Toolkit, Taiwind CSS, Framer Motion,
        Vercel
      </p>
    </footer>
  );
}
