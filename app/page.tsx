import About from "@/components/about";
import Intro from "@/components/intro";
import ProjectList from "@/components/projectList";
import SectionDivider from "@/components/sectionDivider";
import Skills from "@/components/skills";

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro></Intro>
      <SectionDivider />
      <About />
      <ProjectList />
      <Skills />
    </main>
  );
}
