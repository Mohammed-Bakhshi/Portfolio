import { cvUrl } from "../content/links.ts";
import "./Hero.css";

export function Hero() {
  return (
    <div className="hero">
      <h1>Hi, My name is Mohammed 👋</h1>
      <p>
        With 4 years in tech, I bring passion and expertise to crafting user-friendly
        applications and solving complex problems. I thrive on challenges, whether in
        Leetcode, developing new skills, or competitive gaming.
      </p>
      <div className="button-row">
        <a className="button-style" href="#about">About Me</a>
        <a className="button-style" href="#projects">My Projects</a>
        <a className="button-style" href={cvUrl} target="_blank" rel="noopener noreferrer">
          View CV
        </a>
      </div>
    </div>
  );
}
