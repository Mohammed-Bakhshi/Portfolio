import type { SxProps, Theme } from '@mui/material/styles';
import { tokens } from '@/styles/tokens';

export const trailDelays = ['0s', '-1.3s', '-2.6s'] as const;

const root: SxProps<Theme> = {
  maxWidth: 1400,
  width: '100%',
  mx: 'auto',
  px: '20px',
  pt: `${tokens.sectionGap}px`,
  textAlign: 'center'
};

const cards: SxProps<Theme> = {
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '2rem',
  justifyContent: 'center'
};

const card: SxProps<Theme> = {
  width: 'min(420px, 100%)',
  borderRadius: '10px',
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    boxShadow: '0 10px 32px rgba(45, 212, 191, 0.18)',
    transform: 'translateY(-4px)',
    '& img': {
      boxShadow: '0 0 20px rgba(45, 212, 191, 0.35)'
    }
  }
};

const header: SxProps<Theme> = {
  alignItems: 'center',
  gap: '1rem',
  mb: '1rem',
  px: '16px',
  pt: '20px'
};

const icon: SxProps<Theme> = {
  width: 80,
  height: 80,
  objectFit: 'cover',
  borderRadius: '50%',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.5)',
  transition: 'box-shadow 0.3s ease'
};

const company: SxProps<Theme> = (theme) => ({
  m: 0,
  color: theme.palette.mode === 'light' ? tokens.textLight : tokens.textStrong,
  fontSize: '1.35rem',
  fontWeight: 600,
  textAlign: 'center'
});

const description: SxProps<Theme> = (theme) => ({
  px: '24px',
  pb: '24px',
  color: theme.palette.mode === 'light' ? tokens.textLight : tokens.text,
  fontSize: '0.95rem',
  lineHeight: 1.7,
  textAlign: 'left'
});

const summary: SxProps<Theme> = {
  m: 0,
  mb: '1rem'
};

const points: SxProps<Theme> = {
  m: 0,
  pl: '1.15rem'
};

const point: SxProps<Theme> = {
  mb: '0.85rem',
  '&:last-child': {
    mb: 0
  }
};

export const Styles = {
  root,
  cards,
  card,
  header,
  icon,
  company,
  description,
  summary,
  points,
  point
};
