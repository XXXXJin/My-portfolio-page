"use client";

import React from "react";
import SectionHeading from "./sectionHeading";
import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";
import Project from "./project";
import { useSectionInview } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInview({ activeSection: "Projects", amount: 0.7 });

  return (
    <motion.section
      className="mb-28 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="projects"
      ref={ref}
    >
      <SectionHeading>My Projects</SectionHeading>
      <div className="flex flex-col gap-5">
        {projectsData.map((project, index) => {
          return (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          );
        })}
      </div>
    </motion.section>
  );
}
