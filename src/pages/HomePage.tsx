import { About } from "../components/About.tsx";
import "./HomePage.css";
import { Footer } from "../components/Footer.tsx";
import { Hero } from "../components/Hero.tsx";
import { Projects } from "../components/Projects.tsx";
import { Skills } from "../components/Skills.tsx";
import { ThemeToggle } from "../components/ThemeToggle.tsx";
import type { ColorMode } from "../hooks/useColorMode.ts";

type HomePageProps = {
  mode: ColorMode;
  onToggle: () => void;
};

export function HomePage({ mode, onToggle }: HomePageProps) {
  return (
    <div className="page" data-theme={mode}>
      <ThemeToggle mode={mode} onToggle={onToggle} />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
