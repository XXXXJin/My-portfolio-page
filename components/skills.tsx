"use client";

import React from "react";
import SectionHeading from "./sectionHeading";
import { skillsData } from "@/lib/data";
import { useSectionInview } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Skills() {
  const { ref } = useSectionInview({ activeSection: "Skills", amount: 0.7 });
  return (
    <motion.section
      id="skills"
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center sm:mb-40"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex justify-center flex-wrap gap-2 text-lg text-gray-800">
        {skillsData.map((skills, index) => {
          return (
            <motion.li
              className="bg-white border border-black/[0.1] rounded-xl px-4 py-2"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              {skills}
            </motion.li>
          );
        })}
      </ul>
    </motion.section>
  );
}
