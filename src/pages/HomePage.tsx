import { About } from "../components/About.tsx";
import "./HomePage.css";
import { Footer } from "../components/Footer.tsx";
import { Hero } from "../components/Hero.tsx";
import { NavBar } from "../components/NavBar.tsx";
import { Projects } from "../components/Projects.tsx";
import { Skills } from "../components/Skills.tsx";
import { WorkHistory } from "../components/WorkHistory.tsx";
import { useScrollReveal } from "../hooks/useScrollReveal.ts";
import type { ColorMode } from "../hooks/useColorMode.ts";

type HomePageProps = {
  mode: ColorMode;
  onToggle: () => void;
};

export function HomePage({ mode, onToggle }: HomePageProps) {
  useScrollReveal();

  return (
    <div className="page" data-theme={mode}>
      <NavBar mode={mode} onToggle={onToggle} />
      <Hero />
      <About />
      <WorkHistory />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
