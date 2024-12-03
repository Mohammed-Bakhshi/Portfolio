import React, { useEffect, useState } from 'react';
import email from './image/email.png';
import linkedin from './image/likedin.png';
import github from './image/github.png';
import facebook from './image/Facebook.png';
import instagram from './image/instagram.png';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(document.querySelector('#header'));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="header"
      style={{
        ...styles.header,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      {/* Header text with sleek, modern typography */}
      <div style={styles.headerText}>Mohammed Bakhshi</div>

      {/* Social Media Icons with refined hover effects */}
      <div style={styles.logoContainer}>
        {[
          { href: 'https://www.linkedin.com/in/mohammed-bakhshi/', imgSrc: linkedin, alt: 'LinkedIn' },
          { href: 'https://github.com/Mohammed-Bakhshi', imgSrc: github, alt: 'GitHub' },
          { href: 'https://www.facebook.com/mohammed.bakhshi/', imgSrc: facebook, alt: 'Facebook' },
          { href: 'https://instagram.com/mohammedbakhshi/', imgSrc: instagram, alt: 'Instagram' },
          { href: 'mailto:mohammedbakhshi@hotmail.com', imgSrc: email, alt: 'Email' },
        ].map(({ href, imgSrc, alt }) => (
          <a key={alt} href={href} target="_blank" rel="noopener noreferrer" style={styles.logoLink}>
            <img
              src={imgSrc}
              alt={alt}
              style={styles.logo}
              onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '21px', // More balanced padding
    position: 'sticky',
    top: 0,
    maxWidth: '3200px', // Restrict header's maximum width
   
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Lighter background, still with transparency
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
    transition: 'background-color 0.3s ease', // Smooth transition for background color on scroll
  },

  headerText: {
    fontSize: '2.8rem',
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    transition: 'color 0.3s ease',
    paddingTop: '5px', // Slight top padding to center the text better vertically
  },

  logoContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  logoLink: {
    display: 'inline-block',
    marginLeft: '20px', // More spaced out for modern aesthetics
    transition: 'all 0.3s ease', // Smooth transition for hover
  },

  logo: {
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    filter: 'grayscale(100%)',
    cursor: 'pointer',
    transition: 'filter 0.3s, transform 0.3s ease',
    transform: 'scale(1)', // Smooth scaling on hover
  },
};

export default Header;
