import { interests, skills } from "../content/skills.ts";
import "./Skills.css";

function SkillList({ title, items, marker }: { title: string; items: string[]; marker: string }) {
  return (
    <div className="skill-panel">
      <div className={marker}></div>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  return (
    <div className="skill-row" id="skills">
      <SkillList title="Technical Skills" items={skills} marker="hacker-line" />
      <SkillList title="Interests" items={interests} marker="scrolling-text" />
    </div>
  );
}
