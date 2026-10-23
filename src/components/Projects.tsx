import { projects } from "../content/projects.ts";
import "./Projects.css";

const icons = {
  music: "♪",
  person: "☺",
  sheet: "▦",
} as const;

export function Projects() {
  return (
    <div className="project-container" id="projects">
      <h1 className="projects-header">Additional Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="project-icon">{icons[project.icon]}</div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a className="project-link" href={project.href} target="_blank" rel="noopener noreferrer">
              View Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
