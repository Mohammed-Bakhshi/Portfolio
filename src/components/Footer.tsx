import { socials } from "../content/links.ts";
import "./Footer.css";

export function Footer() {
  return (
    <div className="footer">
      <div className="tech-info">
        <span>Developed with React.js</span>
        <span>Hosted on AWS</span>
        <span>Powered by Node.js & Nginx</span>
      </div>
      <div className="social-row">
        {socials.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.label === "Email" ? undefined : "_blank"}
            rel="noopener noreferrer"
          >
            <img src={link.icon} alt={link.label} />
          </a>
        ))}
      </div>
      <div className="footer-text">Thanks for checking out my portfolio 👋</div>
    </div>
  );
}
