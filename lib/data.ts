import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import weatherApp from "@/public/weatherApp.png";

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
    title: "Weather App",
    description:
      "Vue.jsで天気予報アプリを作成、都市を検索して、その都市の現在の天気と今後一週間の天気予報を表示する。データはWeatherAPIから取得",
    tags: ["Vue", "Vue Router", "Tailwind", "Font Awesome"],
    imageUrl: weatherApp,
    link: "https://vue-practice-iota.vercel.app/",
  },
  {
    title: "Comming soon...",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
    link: "",
  },
  {
    title: "Comming soon...",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    link: "",
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
