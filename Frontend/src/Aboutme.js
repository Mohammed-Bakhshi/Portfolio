import React, { useState, useEffect, useRef } from 'react';
import './Aboutme.css';

// Import images for the section
import Mohammed from './image/Mohammed.PNG';
import MosGames from './image/Mo\'s Games logo.png';
import Nodejs from './image/node.png';
import clearear from './image/Clearear.jpg';
import RESTful from './image/RESTful API.png';
import Javascript from './image/javascript.png';
import react from './image/React.png';
import Python from './image/python.png';
import SQL from './image/sql-logo.png';
import kotlin from './image/kotlin.png';
import selenium from './image/Selenium.png';
import renuem from './image/Renuem.png';

// WorkCard Component
const WorkCard = ({ icon, title, description }) => (
  <div className="work-card">
    <div className="card-header">
      <img className="work-icon" src={icon} alt={`${title} logo`} />
      <h4 className="company-name">{title}</h4>
    </div>
    <div className="card-description">{description}</div>
  </div>
);

const MainContent = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState({});
  const [visibleSections, setVisibleSections] = useState({});

  const mainContentRef = useRef(null);

  useEffect(() => {
    const updateView = () => setIsMobileView(window.innerWidth <= 1050);
    updateView();
    window.addEventListener('resize', updateView);
    return () => window.removeEventListener('resize', updateView);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    const fadeUpSection = mainContentRef.current;
    if (fadeUpSection) observer.observe(fadeUpSection);

    return () => {
      if (fadeUpSection) observer.unobserve(fadeUpSection);
    };
  }, []);

  const handleLogoHover = (id) =>
    setTooltipVisible((prev) => ({ ...prev, [id]: true }));

  const handleLogoLeave = (id) =>
    setTooltipVisible((prev) => ({ ...prev, [id]: false }));

  const techLanguages = [
    { id: 'javascript', src: Javascript, name: 'Javascript' },
    { id: 'react', src: react, name: 'React.js' },
    { id: 'Node.js', src: Nodejs, name: 'Node.js' },
    { id: 'python', src: Python, name: 'Python' },
    { id: 'SQL', src: SQL, name: 'SQL' },
    { id: 'RESTful APIs', src: RESTful, name: 'RESTful APIs' },
    { id: 'selenium', src: selenium, name: 'Selenium' },
    { id: 'kotlin', src: kotlin, name: 'Kotlin' },
  ];

  const workHistory = [
    {
      id: '2024-present',
      icon: renuem,
      title: '🌍 Renuem',
      description: (
        <>
          <p>Renewable energy investment platform.</p>
          <ul>
            <li>
              Developed a renewable energy investment app using React Native
              (Expo) and Node.js with Express.js, enabling individuals to invest
              in wind farms and solar panels through a scalable and secure
              platform.
            </li>
            <br />
            <li>
              Deployed the backend on AWS, integrating MySQL RDS for efficient
              data management and real-time investment tracking.
            </li>
            <br />
            <li>
              Collaborated with stakeholders to align the app with business
              goals, driving user engagement and satisfaction.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: '2024',
      icon: clearear,
      title: '💼 Clear Ear',
      description: (
        <>
          <p>Hearing clinic appointment management app.</p>
          <ul>
            <li>
              Designed and developed an Android app using React Native to manage
              patient appointments and streamline operations for a hearing
              clinic.
            </li>
            <br />
            <li>
              Integrated a local database with AsyncStorage to store and track
              customer details and appointment history.
            </li>
            <br />
            <li>
              Worked closely with clinic staff to gather requirements and ensure
              the app met operational needs and improved workflow efficiency.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: '2020-2023',
      icon: MosGames,
      title: '🎮 Mo’s Pvt',
      description: (
        <>
          <p>Gamimg lounge</p>
          <ul>
            <li>
              Conducted data analysis for the launch of bubble tea in Pakistan,
              identifying key demographics and customer segments for targeted
              marketing.
            </li>
            <br />
            <li>
              Analyzed market trends to assess the possibility of expanding into
              new locations for bubble tea and nitrogen ice cream shops.
            </li>
            <br />
            <li>
              Developed and maintained the Mo’s Games website using HTML, CSS,
              and JavaScript, improving customer engagement and online presence.
            </li>
            <br />
            <li>
              Utilized data insights to optimize marketing strategies, driving
              successful product launches and business growth.
            </li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div className="main" ref={mainContentRef}>
      <div className={`bg ${isMobileView ? '' : 'wide'}`}>
        <div className={`hero-section ${isMobileView ? '' : 'row'}`}>
          <div style={{ textAlign: 'center' }}>
            <img src={Mohammed} alt="Mohammed Bakhshi" />
            <div className="image-caption">
              Mohammed Bakhshi - Full Stack Developer
            </div>
          </div>
          {!isMobileView && <div className="divider"></div>}
          <div className={`paragraph ${visibleSections[mainContentRef.current?.id] ? 'fade-up' : ''}`}>
          <p>
              With over 7 years of experience as a Full Stack Developer and Data
              Analyst, I’ve built my career around designing efficient,
              user-focused solutions that bridge technical innovation with
              real-world impact.
            </p>
            <p>
              I’ve also been fortunate to combine my technical skills with
              entrepreneurial insight. For instance, I played a key role in
              launching innovative ventures, such as introducing fruit bubble
              tea to the Pakistani market while managing a dynamic gaming lounge
              in Lahore.
            </p>
            <p>
              Outside of work, I’m always exploring the latest in technology,
              tackling coding challenges, and pursuing hobbies like gaming,
              photography, and solving puzzles.
            </p>
            <p>
              If you’re interested in learning more about my projects or
              discussing collaboration opportunities, feel free to explore
              further.
            </p>
          </div>
        </div>

        <h3 className="section-header">Tech Languages</h3>
        <div className="logo-container">
          {techLanguages.map(({ id, src, name }) => (
            <div
              key={id}
              style={{ position: 'relative' }}
              onMouseEnter={() => handleLogoHover(id)}
              onMouseLeave={() => handleLogoLeave(id)}
            >
              <img id={id} src={src} alt={name} />
              <div className={`tooltip ${tooltipVisible[id] ? 'visible' : ''}`}>
                {name}
              </div>
            </div>
          ))}
        </div>

        <div className="work-history-section">
          <h3 className="section-header">Work History</h3>
          <div className="work-cards-container">
            {workHistory.map((work) => (
              <WorkCard
                key={work.id}
                icon={work.icon}
                title={work.title}
                description={work.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
