import { tokens } from '@/styles/tokens';

export const registeredAngles = `
@property --trail-angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

@property --skill-trail-angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}
`;

export const globalStyles = {
  html: {
    scrollBehavior: 'smooth',
    scrollPaddingTop: `calc(${tokens.navHeight}px + ${tokens.sectionGap}px)`
  },
  'html, body, #root': {
    minHeight: '100%'
  },
  '@keyframes fadeUp': {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' }
  },
  '@keyframes wave': {
    '0%, 100%': { transform: 'rotate(0deg)' },
    '15%': { transform: 'rotate(14deg)' },
    '30%': { transform: 'rotate(-8deg)' },
    '45%': { transform: 'rotate(14deg)' },
    '60%': { transform: 'rotate(-4deg)' },
    '75%': { transform: 'rotate(10deg)' }
  },
  '@keyframes trail-rotate': {
    to: { '--trail-angle': '360deg' }
  },
  '@keyframes skill-trail-rotate': {
    to: { '--skill-trail-angle': '360deg' }
  },
  '@keyframes title-pulse': {
    '0%, 100%': { opacity: 0.5, transform: 'scaleX(0.8)' },
    '50%': { opacity: 1, transform: 'scaleX(1.2)' }
  }
};
