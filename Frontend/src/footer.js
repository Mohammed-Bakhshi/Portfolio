import React from 'react';
import linkedin from './image/likedin.png';
import github from './image/github.png';
import email from './image/email.png';
import facebook from './image/Facebook.png'
import instagram from './image/instagram.png';
import { padding } from '@mui/system';

const Footer = ({ isMobileView }) => {
  const icons = [
    { src: linkedin, alt: 'LinkedIn', href: 'https://www.linkedin.com/in/mohammed-bakhshi/' },
    { src: github, alt: 'GitHub', href: 'https://github.com/Mohammed-Bakhshi' },
    { src: facebook, alt: 'Facebook', href: 'https://www.facebook.com/mohammed.bakhshi/' },
    { src: instagram, alt: 'Instagram', href: 'https://instagram.com/mohammedbakhshi/' },
    { src: email, alt: 'Email', href: 'mailto:mohammedbakhshi@hotmail.com' },
  ];

  const logoStyle = {
    cursor: 'pointer',
    transition: 'filter 0.3s',
    width: isMobileView ? '25px' : '35px',
    height: isMobileView ? '25px' : '35px',
    borderRadius: '50%',
  };

  const grayscaleLogoStyle = {
    filter: 'grayscale(100%)',
    transition: 'filter 0.3s',
  };

  const footerStyle = {
    color: '#aaa',
    textAlign: 'center',
    position: 'sticky',
    bottom: isMobileView ? '20px' : '5px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    padding: '40px 0',
  };

  return (
    <footer style={footerStyle}>
      {icons.map(({ src, alt, href }, index) => (
        <a key={index} href={href} target="_blank" rel="noopener noreferrer">
          <img
            src={src}
            alt={alt}
            style={{ ...logoStyle, ...grayscaleLogoStyle }}
            onMouseEnter={(e) => (e.target.style.filter = 'grayscale(0%)')}
            onMouseLeave={(e) => (e.target.style.filter = 'grayscale(100%)')}
          />
        </a>
      ))}
    </footer>
  );
};

export default Footer;
