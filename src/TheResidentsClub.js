import React, { useState, useEffect } from 'react';
import './TheResidentsclub.css';
import residentsClubImage1 from './image/Aboutmebg.jpg';
import residentsClubImage2 from './image/Aboutmebg.jpg';
import residentsClubImage3 from './image/Aboutmebg.jpg';

const TheResidentsClub = () => {
  const residentsClubDetails = [
    "Developed a social networking app for The Residents Club using React Native, enabling members to interact, share updates, and stay informed about club events.",
    "Integrated real-time chat functionality, allowing members to communicate effortlessly within the app.",
    "Deployed backend services using Firebase for seamless data syncing and user authentication across multiple devices.",
  ];

  const images = [residentsClubImage1, residentsClubImage2, residentsClubImage3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically change slides every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="residentsclub-container">
      {/* Image Slider */}
      <div className="residentsclub-image-container">
        <img
          src={images[currentImageIndex]}
          alt="Residents Club"
          className="residentsclub-image"
        />
        <button className="arrow arrow-left" onClick={handlePrev}>
          &#8249;
        </button>
        <button className="arrow arrow-right" onClick={handleNext}>
          &#8250;
        </button>
      </div>

      {/* Text Content */}
      <div className="residentsclub-content">
        <h1 className="residentsclub-title">🏠 The Residents Club</h1>
        <p className="residentsclub-description">
          Social networking platform for The Residents Club.
        </p>

        {/* New Summary Section */}
        <h2>What is The Residents Club?</h2>
        <p className="residentsclub-summary">
          The Residents Club is a platform for residents to connect, share updates, and stay informed about upcoming events in their community.
        </p>

        {/* Role Section */}
        <h2>What was my role in The Residents Club?</h2>
        <p className="residentsclub-role-description">
          As a developer, I created and maintained the social networking app, ensuring seamless communication and real-time event updates for the club members.
        </p>

        {/* Additional Details */}
        <ul className="residentsclub-bullet-points">
          {residentsClubDetails.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TheResidentsClub;
