"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsDownload } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { useSectionInview } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInview({ activeSection: "Home", amount: 0.5 });

  return (
    <section
      className="max-w-[50rem] text-center scroll-mt-[100rem]"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Image
            src="/portrait.png"
            alt="自己紹介画像アイコン"
            width={192}
            height={192}
            priority={true}
            className="h-24 w-24 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </motion.div>
      </div>
      <motion.p
        className="mb-10 mt-10 px-4 text-xl !leading-10 sm:text-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        こんにちは、
        <span className="font-extrabold">
          私は
          <ruby>
            金海旭<rt>キムヘウク</rt>
          </ruby>
          と申します。
        </span>
        フロントエンドエンジニアになって4年になります。
        日々進化するWebの世界とこれからも向き合っていきたいと思います。
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 font-medium"
      >
        {/* 履歴書ダウンロードボタン */}
        <a
          href="/CV.pdf"
          download
          className="self-stretch flex items-center justify-center  py-3 px-4 bg-slate-900 text-white rounded-full outline-none hover:scale-110 active:scale-105 transition hover:bg-slate-800 gap-2 cursor-pointer dark:text-slate-200 dark:hover:bg-gray-800"
        >
          Download CV <BsDownload className="text-slate-400" />
        </a>
        {/* githubリンク遷移ボタン */}
        <a
          href="https://github.com/XXXXJin"
          target="_blank"
          className="flex items-center p-4 bg-white rounded-full outline-none hover:scale-110 active:scale-105 transition hover:bg-slate-50 gap-2 cursor-pointer border border-black/5 dark:bg-white/10 dark:text-white"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
