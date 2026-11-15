import type { SxProps, Theme } from '@mui/material/styles';
import { tokens } from '@/styles/tokens';

const root: SxProps<Theme> = {
  maxWidth: 1200,
  width: '100%',
  mx: 'auto',
  mt: `${tokens.sectionGap}px`,
  px: '20px',
  pt: '28px',
  pb: '36px',
  border: '1px solid rgba(45, 212, 191, 0.1)',
  borderRadius: '12px',
  background: tokens.surfaceRaised,
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)'
};

const grid: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '20px'
};

const card: SxProps<Theme> = {
  p: '20px',
  borderRadius: '10px',
  textAlign: 'center',
  background: 'rgba(255, 255, 255, 0.1)',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    boxShadow: '0 8px 24px rgba(45, 212, 191, 0.2)',
    transform: 'translateY(-6px)'
  }
};

const icon: SxProps<Theme> = {
  mb: '10px',
  color: tokens.accent,
  fontSize: 40,
  lineHeight: 1
};

const title: SxProps<Theme> = {
  m: '10px 0',
  fontSize: '1.5rem'
};

const description: SxProps<Theme> = {
  mb: '55px',
  fontSize: '1rem'
};

const link: SxProps<Theme> = {
  display: 'inline-block',
  px: '15px',
  py: '10px',
  border: `2px solid ${tokens.accent}`,
  borderRadius: '5px',
  color: tokens.accent,
  fontWeight: 'bold',
  textDecoration: 'none',
  '&:hover': {
    color: '#111',
    background: tokens.accent
  }
};

export const Styles = {
  root,
  grid,
  card,
  icon,
  title,
  description,
  link
};
