import React, { useState, useEffect } from 'react';
import email from './image/email.png';
import linkedin from './image/likedin.png';
import github from './image/github.png';
import facebook from './image/Facebook.png';
import instagram from './image/instagram.png';
import contactmebg from './image/contactmebg.jpg'

const styles = {
  mainContent: {
    backgroundColor: '#b6dee8',
    backgroundImage: `url(${contactmebg})`, // Add the background image
    backgroundAttachment: 'fixed', // Fix the background for a parallax effect
    backgroundSize: 'cover', // Ensure the image covers the entire area
    backgroundPosition: 'center', // Center the image
    backgroundRepeat: 'no-repeat', // Prevent tiling
    color: '#aaa',
    textAlign: 'center',
    paddingTop:'10%',
    fontSize:'25px',
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
  },

 
  logoContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '60vh',
    marginTop: '20px',
  },
  logo: {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    filter: 'grayscale(100%)',
    cursor: 'pointer',
    transition: 'filter 0.3s',
  },
  envelopeContainer: {
    position: 'absolute',
    top: '70%',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '30vh',
  },
  envelope: {
    fontSize: '2.5rem',
    cursor: 'pointer',
    position: 'absolute',
    transition: 'transform 0.2s ease',
  },
  jokeBox: {
    position: 'absolute',
    top: '-100px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 15px',
    borderRadius: '10px',
    fontSize: '1rem',
    whiteSpace: 'nowrap',
    opacity: 0,
    pointerEvents: 'none',
    transition: 'opacity 0.3s ease',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
};

const Portfolio = () => {
  const jokes = [
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "Why do Java developers wear glasses? Because they can't C#!",
    "I told my computer I needed a break, and now it won’t stop sending me KitKats.",
    "Why did the developer go broke? Because they used up all their cache!",
    "How do full-stack devs describe themselves? As 'in-divisible' units!",
    "What’s a programmer’s favorite type of music? Algo-rhythm!",
  ];

  const generateRandomPositions = () => {
    const positions = [];
    const minDistance = 10; // Minimum distance between envelopes (in percentage)

    const isTooClose = (newPos, existingPositions) => {
      return existingPositions.some(
        (pos) =>
          Math.abs(parseFloat(pos.top) - parseFloat(newPos.top)) < minDistance &&
          Math.abs(parseFloat(pos.left) - parseFloat(newPos.left)) < minDistance
      );
    };

    while (positions.length < jokes.length) {
      const newPos = {
        top: `${Math.random() * -200 + -20}%`, // Random top between 10% and 80%
        left: `${Math.random() * 80 + 10}%`, // Random left between 10% and 90%
      };

      if (!isTooClose(newPos, positions)) {
        positions.push(newPos);
      }
    }

    return positions;
  };

  const [positions, setPositions] = useState(generateRandomPositions);

  useEffect(() => {
    const handleResize = () => setPositions(generateRandomPositions());
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseEnter = (e) => {
    const jokeElement = e.target.querySelector('.joke-box');
    jokeElement.style.opacity = 1;
  };

  const handleMouseLeave = (e) => {
    const jokeElement = e.target.querySelector('.joke-box');
    jokeElement.style.opacity = 0;
  };

  return (
    <div style={{ position: 'relative' }}>
      <div style={styles.mainContent}>
        <h1>Contact Me</h1>

        {/* Social Media Links */}
        <div style={styles.logoContainer}>
          {[
            { href: 'https://www.linkedin.com/in/mohammed-bakhshi/', imgSrc: linkedin, alt: 'LinkedIn' },
            { href: 'https://github.com/Mohammed-Bakhshi', imgSrc: github, alt: 'GitHub' },
            { href: 'https://www.facebook.com/mohammed.bakhshi/', imgSrc: facebook, alt: 'Facebook' },
            { href: 'https://instagram.com/mohammedbakhshi/', imgSrc: instagram, alt: 'Instagram' },
            { href: 'mailto:mohammedbakhshi@hotmail.com', imgSrc: email, alt: 'Email' },
          ].map(({ href, imgSrc, alt }) => (
            <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
              <img
                src={imgSrc}
                alt={alt}
                style={styles.logo}
                onMouseEnter={(e) => (e.target.style.filter = 'grayscale(0%)')}
                onMouseLeave={(e) => (e.target.style.filter = 'grayscale(100%)')}
              />
            </a>
          ))}
        </div>

        {/* Jokes Section */}
        <div style={styles.envelopeContainer}>
          {jokes.map((joke, index) => (
            <span
              key={index}
              style={{ ...styles.envelope, ...positions[index] }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              📩
              <span className="joke-box" style={styles.jokeBox}>{joke}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
