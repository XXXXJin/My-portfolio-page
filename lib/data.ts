import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "プログラミングに出会う",
    data: "2018",
    description:
      "プログラミングに触れる機会があり、その面白さに魅了され、ITの世界に入ることを決心し、独学でスキルを磨きながら、就職活動を開始",
  },
  {
    title: "ブリッジSE",
    data: "2018-2019",
    description:
      "ブリッジシステムエンジニアとして、オフショア開発者と密なコミュニケーションを取りながら、案件管理業務を担当。PHPやMySQLなどに触れる",
  },
  {
    title: "フロントエンドエンジニア",
    data: "2020-present",
    description:
      "フロントエンドに転向し、React, Typescriptなどの技術をメインにフロントエンド開発を担当。Next.jsによるシステム刷新開発にも経験する",
  },
];

export const projectsData = [
  {
    title: "Comming soon...",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Comming soon...",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Comming soon...",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Redux",
  "Redux-Toolkit",
  "Git",
  "Framer Motion",
  "Tailwind",
  "PHP",
  "MySQL",
] as const;
