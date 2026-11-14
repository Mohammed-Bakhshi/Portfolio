import { socials } from "../content/links.ts";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="social-row">
        {socials.map((link) => (
          <a
            key={link.label}
            className="social-link"
            href={link.href}
            target={link.label === "Email" ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            <img src={link.icon} alt="" />
          </a>
        ))}
      </div>
      <p className="footer-text">Thanks for checking out my portfolio 👋</p>
    </footer>
  );
}
