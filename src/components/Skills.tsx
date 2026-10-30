import { skillGroups, softSkillGroups } from "../content/skills.ts";
import "./Skills.css";

type SkillGroup = {
  title: string;
  items: readonly string[];
};

function SkillPanel({ title, groups }: { title: string; groups: readonly SkillGroup[] }) {
  return (
    <div className="skill-panel skill-panel-animated">
      <div className="skill-panel-content">
        <h3>{title}</h3>
        {groups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h4>{group.title}</h4>
            <ul className="skill-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section className="skills-section section-reveal" id="skills">
      <h2 className="section-title skills-title">Skills</h2>
      <div className="skill-row">
        <SkillPanel title="Technical Skills" groups={skillGroups} />
        <SkillPanel title="Soft Skills" groups={softSkillGroups} />
      </div>
    </section>
  );
}
