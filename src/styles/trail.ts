import type { Theme } from '@mui/material/styles';
import type { SystemStyleObject } from '@mui/system';
import { reduceMotion, tokens } from '@/styles/tokens';

const ringMask = 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)';

interface ITrailBorderOptions {
  delay?: string;
  hover?: boolean;
}

export const trailBorder = ({ delay, hover = false }: ITrailBorderOptions = {}): ((
  theme: Theme
) => SystemStyleObject<Theme>) => {
  return (theme) => ({
    position: 'relative',
    isolation: 'isolate',
    overflow: 'hidden',
    border: 'none',
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      padding: '2px',
      borderRadius: 'inherit',
      background: `conic-gradient(from var(--trail-angle), transparent 0deg, transparent 250deg, ${tokens.accentDark} 285deg, ${tokens.accent} 305deg, ${tokens.accentHover} 325deg, transparent 360deg)`,
      pointerEvents: 'none',
      animation: 'trail-rotate 4s linear infinite',
      animationDelay: delay,
      WebkitMask: ringMask,
      mask: ringMask,
      WebkitMaskComposite: 'xor',
      maskComposite: 'exclude',
      ...(hover && {
        opacity: 0,
        transition: 'opacity 0.35s ease'
      }),
      [reduceMotion]: {
        animation: 'none',
        opacity: hover ? 0.2 : 0.35,
        background: `linear-gradient(90deg, transparent, ${tokens.accent}, transparent)`
      }
    },
    ...(hover && {
      '&:hover::before': {
        opacity: 1,
        [reduceMotion]: {
          opacity: 0.35
        }
      }
    }),
    '&::after': {
      content: '""',
      position: 'absolute',
      inset: '2px',
      zIndex: 0,
      borderRadius: 'inherit',
      background: theme.palette.mode === 'light' ? '#ffffff' : tokens.surfaceRaised,
      pointerEvents: 'none'
    },
    '& > *': {
      position: 'relative',
      zIndex: 1
    }
  });
};
