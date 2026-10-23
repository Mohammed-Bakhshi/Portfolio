import { jobs } from "../content/jobs.ts";
import "./WorkHistory.css";

export function WorkHistory() {
  return (
    <div className="work-history">
      <h3>Work History</h3>
      <div className="work-cards">
        {jobs.map((job) => (
          <div className="work-card" key={job.title}>
            <div className="card-header">
              <img className="work-icon" src={job.icon} alt="" />
              <h4 className="company-name">{job.title}</h4>
            </div>
            <div className="card-description">
              <p>{job.summary}</p>
              {job.points.map((point) => (
                <p key={point}>{point}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
