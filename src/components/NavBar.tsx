import { useEffect, useState } from "react";
import { cvDownloadName, cvUrl } from "../content/links.ts";
import { useActiveSection } from "../hooks/useActiveSection.ts";
import { useScrollPast } from "../hooks/useScrollPast.ts";
import type { ColorMode } from "../hooks/useColorMode.ts";
import { ThemeToggle } from "./ThemeToggle.tsx";
import "./NavBar.css";

const navLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Work", href: "#work", id: "work" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
] as const;

type NavBarProps = {
  mode: ColorMode;
  onToggle: () => void;
};

export function NavBar({ mode, onToggle }: NavBarProps) {
  const scrolled = useScrollPast();
  const active = useActiveSection(["about", "work", "skills", "projects"]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`nav${scrolled ? " nav-scrolled" : ""}${menuOpen ? " nav-open" : ""}`}>
      <a className="nav-brand" href="#home" onClick={closeMenu}>
        Mohammed
      </a>

      <nav className="nav-links nav-desktop" aria-label="Main">
        {navLinks.map((link) => (
          <a
            key={link.label}
            className={`nav-link${active === link.id ? " active" : ""}`}
            href={link.href}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="nav-actions nav-desktop">
        <ThemeToggle mode={mode} onToggle={onToggle} />
        <a
          className="nav-action-btn"
          href={cvUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View CV
        </a>
        <a className="nav-action-btn" href={cvUrl} download={cvDownloadName}>
          Download CV
        </a>
      </div>

      <button
        type="button"
        className="nav-burger"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-drawer${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
        <nav className="nav-drawer-list" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className={`nav-drawer-item${active === link.id ? " active" : ""}`}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="nav-drawer-footer">
          <a
            className="nav-drawer-item"
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            View CV
          </a>
          <a
            className="nav-drawer-item"
            href={cvUrl}
            download={cvDownloadName}
            onClick={closeMenu}
          >
            Download CV
          </a>
          <div className="nav-drawer-item nav-drawer-theme">
            <span>Colour mode</span>
            <ThemeToggle mode={mode} onToggle={onToggle} />
          </div>
        </div>
      </div>

      {menuOpen && (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="Close menu"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}
