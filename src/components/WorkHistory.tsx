import { jobs } from "../content/jobs.ts";
import "./WorkHistory.css";

export function WorkHistory() {
  return (
    <section className="work-history section-reveal" id="work">
      <h2 className="section-title">Work History</h2>
      <div className="work-cards">
        {jobs.map((job) => (
          <div className="work-card trail-border trail-border-hover" key={job.title}>
            <div className="card-header">
              <img className="work-icon" src={job.icon} alt="" />
              <h4 className="company-name">{job.title}</h4>
            </div>
            <div className="card-description">
              <p>{job.summary}</p>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
