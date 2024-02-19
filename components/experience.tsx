"use client";

import React from "react";
import SectionHeading from "./sectionHeading";
import { experiencesData } from "@/lib/data";
import { useSectionInview } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInview({
    activeSection: "Experience",
    amount: 0.5,
  });
  return (
    <motion.section
      id="experience"
      ref={ref}
      className="mt-28 mb-28 px-4 max-w-[45rem] sm:mb:40 sm:mt-0 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <SectionHeading>My Experience</SectionHeading>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {experiencesData.map((item, index) => {
          return (
            <li className="mb-10 ms-4" key={index}>
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.data}
              </time>
              <h3 className="text-sm font-bold text-gray-900 py-2">
                {item.title}
              </h3>
              <p className="mb-4 text-base font-normal text-gray-700">
                {item.description}
              </p>
            </li>
          );
        })}
      </ol>
    </motion.section>
  );
}
