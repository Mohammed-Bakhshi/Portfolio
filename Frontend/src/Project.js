import React, { useState, useEffect, useRef } from "react";
import "./Project.css"; // Updated styles here
import {
  FaSolarPanel,
  FaClinicMedical,
  FaMusic,
  FaGamepad,
  FaFileSignature,
  FaUserCircle,
  FaHeadphones, // Alternative icon for Clear Ear
  FaFileExcel, // Excel-related icon for the dashboa
} from "react-icons/fa";

const Project = () => {
  const [visibleSection, setVisibleSection] = useState(false);
  const projectContainerRef = useRef(null);

  // Intersection Observer to trigger fade-up animation for the project container
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSection(true);
        }
      });
    }, {
      threshold: 0.2
    });

    if (projectContainerRef.current) {
      observer.observe(projectContainerRef.current);
    }

    return () => {
      if (projectContainerRef.current) {
        observer.unobserve(projectContainerRef.current);
      }
    };
  }, []);

  const projects = [
    
      {
        id: 1,
        icon: <FaMusic size={40} />,
        title: "Billboard Data Analysis",
        description: "Analyze decades of Billboard Hot 100 music trends.",
        githubLink: "https://github.com/Mohammed-Bakhshi/web-scraping-Billboard-hot-100",
      },
      {
        id: 2,
        icon: <FaHeadphones size={40} />, // Updated icon
        title: "Clear Ear",
        description: "Track customer details and appointments in ear clinics.",
        githubLink: "https://github.com/Mohammed-Bakhshi/Clear-ear-/tree/main",
      },
      {
        id: 3,
        icon: <FaUserCircle size={40} />,
        title: "Digital Portfolio",
        description: "Showcase of professional and personal projects.",
        githubLink: "https://github.com/Mohammed-Bakhshi/Digital-Portfolio",
      },
      {
        id: 4,
        icon: <FaFileExcel size={40} />, // Updated icon
        title: "Excel Smart Dashboard",
        description: "Interactive Excel dashboards for data visualization.",
        githubLink: "https://github.com/Mohammed-Bakhshi/Excel-dashboard",
      },
  ];

  return (
    <div className={`project-container ${visibleSection ? 'fade-up' : ''}`} ref={projectContainerRef}>
      <h1 className="projects-header">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-icon">{project.icon}</div>
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
