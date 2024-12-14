import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import AboutMe from './Aboutme';
import Project from './Project';
import './HomePage.css';
import FooterTab from './footer';

const HomePage = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1050);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const commonStyle = {
    background: 'linear-gradient(135deg, #0D1117, #21262D)',
    color: '#C9D1D9',
    fontFamily: "'Roboto', sans-serif",
    boxSizing: 'border-box',
    paddingInlineStart: '20px',
    paddingInlineEnd: '20px',
    overflowX: 'hidden',
    position: 'relative',
  };

  const headerContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: isMobileView ? '50px' : '120px',
    justifyContent: 'center',
    minHeight: '30vh',
    textAlign: 'center',
    padding: '20px',
  };

  const headerStyle = {
    margin: '0 0 10px',
    color: '#58A6FF',
    fontSize: '2.5rem',
  };

  const subHeaderStyle = {
    margin: '0 0 20px',
    lineHeight: '1.8',
    color: '#C9D1D9',
    fontSize: '18px',
    maxWidth: '600px',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  };

  const panelContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '40px',
    maxWidth: '800px',
    margin: '40px auto 0',
    position: 'relative',
  };

  const sidePanelStyle = {
    backgroundColor: '#21262D',
    color: '#C9D1D9',
    padding: '50px',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transformOrigin: 'left',
    animation: 'drawBox 1s ease-in-out',
    animationDelay: '0.5s',
    position: 'relative',
  };

  const hackerLineStyle = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '-15px',
    width: '5px',
    background: 'linear-gradient(180deg, #58A6FF, transparent)',
    animation: 'pulseLine 2s infinite',
  };

  const scrollingTextStyle = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: '-15px',
    width: '5px',
    background: 'linear-gradient(180deg, transparent, #58A6FF)',
    animation: 'scrollingText 5s linear infinite',
  };

  return (
    <div style={commonStyle}>
      <div style={headerContainerStyle}>
        <h1 style={headerStyle}>Hi, My name is Mohammed 👋</h1>
        <p style={subHeaderStyle}>
          With 4 years in tech, I bring passion and expertise to crafting user-friendly applications and solving complex problems. I thrive on challenges, whether in Leetcode, developing new skills, or competitive gaming.
        </p>
        <div style={buttonContainerStyle}>
          <ScrollLink to="about-section" smooth={true} duration={500} className="button-style">
            About Me
          </ScrollLink>
          <ScrollLink to="Project-section" smooth={true} duration={500} className="button-style">
            My Projects
          </ScrollLink>
          <a
            href="https://react--portfolio.s3.eu-west-2.amazonaws.com/Mohammed+Bakhshi+CV.pdf"
            download="Mohammed_Bakhshi_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="button-style"
          >
            View CV
          </a>
        </div>
      </div>

      <div id="skills-section" style={panelContainerStyle}>
        <div style={sidePanelStyle} className="draw-panel">
          <div style={hackerLineStyle}></div>
          <h3>Technical Skills</h3>
          <ul style={{ textAlign: 'left', lineHeight: '1.8' }}>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>RESTful APIs</li>
            <li>SQL</li>
            <li>Python</li>
            <li>AWS</li>
          </ul>
        </div>
        <div style={sidePanelStyle} className="draw-panel">
          <div style={scrollingTextStyle}></div>
          <h3>Interests</h3>
          <ul style={{ textAlign: 'left', lineHeight: '1.8' }}>
            <li>Development</li>
            <li>Leetcode</li>
            <li>Business</li>
            <li>Competitive gaming</li>
            <li>Music</li>
            <li>Photography</li>
            <li>Foreign TV</li>
          </ul>
        </div>
      </div>

      <div id="about-section" style={{ padding: '40px 0' }}>
        <AboutMe />
      </div>

      <div id="Project-section" style={{ padding: '40px 0' }}>
        <Project />
        <div className="footer">
          <div className="tech-info">
            <span>Developed with React.js</span>
            <span>Hosted on AWS</span>
            <span>Powered by Node.js & Nginx</span>
          </div>
          <FooterTab />
          <div className="footer-text">Thanks for checking out my portfolio 👋</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
