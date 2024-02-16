"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="max-w-[50rem] text-center">
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
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
        <span className="font-extrabold">
          こんにちは、私は金海旭と申します。
        </span>
        フロントエンドエンジニアになって
        <span className="font-extrabold">4年</span>になります。
        日々進化するWebの世界とこれからも向き合っていきたいと思います。
      </motion.p>
    </section>
  );
}
