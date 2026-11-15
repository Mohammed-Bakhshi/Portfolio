import type { SxProps, Theme } from '@mui/material/styles';
import { mobile, tokens } from '@/styles/tokens';

const root: SxProps<Theme> = {
  maxWidth: 1100,
  mx: 'auto',
  width: '100%',
  px: '20px',
  pt: `${tokens.sectionGap}px`
};

const card: SxProps<Theme> = (theme) => ({
  flexDirection: 'row',
  alignItems: 'flex-start',
  gap: '2.5rem',
  p: '36px',
  border: '1px solid rgba(45, 212, 191, 0.1)',
  borderRadius: '12px',
  background: theme.palette.mode === 'light' ? '#ffffff' : tokens.surfaceRaised,
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)',
  [mobile]: {
    flexDirection: 'column',
    alignItems: 'center',
    p: '28px'
  }
});

const profile: SxProps<Theme> = {
  flexShrink: 0,
  alignItems: 'center',
  textAlign: 'center'
};

const portrait: SxProps<Theme> = {
  width: 180,
  height: 180,
  border: '2px solid rgba(45, 212, 191, 0.35)',
  borderRadius: '50%',
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
  objectFit: 'cover'
};

const caption: SxProps<Theme> = {
  mt: '0.75rem',
  color: tokens.textMuted,
  fontSize: '0.9rem',
  fontStyle: 'italic'
};

const copy: SxProps<Theme> = (theme) => ({
  color: theme.palette.mode === 'light' ? tokens.textLight : '#e0e0e0',
  fontFamily: '"Poppins", sans-serif',
  fontSize: 17,
  lineHeight: 1.85,
  [mobile]: {
    fontSize: 16,
    lineHeight: 1.7
  }
});

const paragraph: SxProps<Theme> = {
  m: 0,
  mb: '1.25rem',
  '&:last-child': {
    mb: 0
  }
};

export const Styles = {
  root,
  card,
  profile,
  portrait,
  caption,
  copy,
  paragraph
};
