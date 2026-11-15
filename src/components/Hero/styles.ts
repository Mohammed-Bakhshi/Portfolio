import type { SxProps, Theme } from '@mui/material/styles';
import { reduceMotion, tokens } from '@/styles/tokens';

const root: SxProps<Theme> = {
  alignItems: 'center',
  justifyContent: 'center',
  px: '20px',
  pt: '16px',
  pb: `${tokens.sectionGap}px`,
  textAlign: 'center'
};

const title: SxProps<Theme> = {
  m: 0,
  mb: '12px',
  color: tokens.accent,
  fontSize: 'clamp(2rem, 5vw, 2.75rem)',
  textShadow: '0 0 40px rgba(45, 212, 191, 0.25)',
  opacity: 0,
  animation: 'fadeUp 0.75s ease-out forwards',
  [reduceMotion]: {
    opacity: 1,
    transform: 'none',
    animation: 'none'
  }
};

const wave: SxProps<Theme> = {
  display: 'inline-block',
  transformOrigin: '70% 70%',
  animation: 'wave 2s ease-in-out 3',
  [reduceMotion]: {
    animation: 'none'
  }
};

const subtitle: SxProps<Theme> = (theme) => ({
  maxWidth: 620,
  m: 0,
  color: theme.palette.mode === 'light' ? tokens.textLight : tokens.text,
  fontSize: 18,
  lineHeight: 1.7,
  opacity: 0,
  animation: 'fadeUp 0.75s ease-out 0.12s forwards',
  [reduceMotion]: {
    opacity: 1,
    transform: 'none',
    animation: 'none'
  }
});

export const Styles = {
  root,
  title,
  wave,
  subtitle
};
