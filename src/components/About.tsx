import { aboutParagraphs, portrait } from "../content/about.ts";
import "./About.css";
import { techLogos } from "../content/skills.ts";
import { WorkHistory } from "./WorkHistory.tsx";

export function About() {
  return (
    <div className="main" id="about">
      <div className="bg">
        <div className="hero-section row">
          <div>
            <img className="portrait" src={portrait.src} alt="Mohammed Bakhshi" />
            <div className="image-caption">{portrait.caption}</div>
          </div>
          <div className="paragraph">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <h3 className="section-header">Tech Languages</h3>
        <div className="tech-logos">
          {techLogos.map((logo) => (
            <img key={logo.name} src={logo.src} alt={logo.name} title={logo.name} />
          ))}
        </div>
        <WorkHistory />
      </div>
    </div>
  );
}
