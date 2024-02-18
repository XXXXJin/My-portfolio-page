"use client";

import React from "react";
import SectionHeading from "./sectionHeading";
import { motion } from "framer-motion";
import { useSectionInview } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInview({ activeSection: "About", amount: 0.5 });

  return (
    <motion.section
      className="mt-28 mb-28 px-4 max-w-[45rem] text-center leading-8 sm:mb:40 sm:mt-0 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About Me</SectionHeading>
      <p>
        プログラミングに魅了されてから、独学で始め、IT業界に入って、すでに五年目となります。
        プログラミングの一番の魅力は、問題解決にあると思います。問題を解決し、答えを見つけた時の達成感が大好きです。
        これまで、
        <span className="font-semibold">React、Next.js、Typescript</span>
        などのスキルを使って、フロントエンド側の開発に携わってきました。
        さらなる挑戦と出会いを求め、今転職活動をしています。
      </p>
      <p>
        プログラミングからリラックスしたい時は、私は映画鑑賞やゲームを楽しむのが好きです。英語学習も好きで、ほぼ毎日英語に触れるようにしています。
      </p>
    </motion.section>
  );
}
