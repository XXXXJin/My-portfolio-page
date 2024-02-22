"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";

type Props = (typeof projectsData)[number];

export default function Project({ title, description, tags, imageUrl }: Props) {
  const projectRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["0 1", "1.33 1"],
  });
  const scalePrograss = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityPrograss = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  return (
    <motion.section
      className="bg-gray-100 max-w-[42rem] border rounded-md border-black/5 overflow-hidden relative hover:bg-gray-200 group dark:bg-gray-800 dark:hover:bg-gray-700"
      ref={projectRef}
      style={{
        scale: scalePrograss,
        opacity: opacityPrograss,
      }}
    >
      <div className="py-4 px-5 pb-8 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10">
        <h3 className="text-2xl font-medium dark:text-slate-200">{title}</h3>
        <p className="my-2 leading-relaxed text-gray-600 dark:text-slate-300">
          {description}
        </p>
        <ul className="flex flex-wrap mt-4 gap-2">
          {tags.map((tag, index) => {
            return (
              <li
                key={index}
                className="bg-gray-500 px-3 py-1 text-[0.7rem] uppercase tracking-wide text-white rounded-full dark:bg-gray-900"
              >
                {tag}
              </li>
            );
          })}
        </ul>
      </div>
      <Image
        src={imageUrl}
        alt={title}
        quality={100}
        className="absolute top-8 -right-40 w-[28rem] rounded-t-lg shadow-2xl hidden sm:block group-hover:-translate-x-4 group-hover:-rotate-3 group-hover:scale-105 transition"
      />
    </motion.section>
  );
}
