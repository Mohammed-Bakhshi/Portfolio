import { aboutParagraphs, portrait } from "../content/about.ts";
import "./About.css";

export function About() {
  return (
    <section className="about section-reveal" id="about">
      <h2 className="section-title">About</h2>
      <div className="about-card">
        <div className="about-profile">
          <img className="portrait" src={portrait.src} alt="Mohammed Bakhshi" />
          <div className="image-caption">{portrait.caption}</div>
        </div>
        <div className="paragraph">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
