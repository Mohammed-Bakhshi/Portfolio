import type { SxProps, Theme } from '@mui/material/styles';
import { tokens } from '@/styles/tokens';

const root: SxProps<Theme> = (theme) => ({
  position: 'relative',
  mt: `${tokens.sectionGap}px`,
  pt: `${tokens.sectionGap}px`,
  borderTop: '1px solid rgba(45, 212, 191, 0.12)',
  borderTopColor:
    theme.palette.mode === 'light' ? 'rgba(20, 184, 166, 0.2)' : 'rgba(45, 212, 191, 0.12)',
  color: theme.palette.mode === 'light' ? tokens.textLight : tokens.text,
  fontSize: 14,
  textAlign: 'center'
});

const socials: SxProps<Theme> = {
  flexDirection: 'row',
  justifyContent: 'center',
  gap: '20px',
  py: '32px',
  pb: '16px'
};

const link: SxProps<Theme> = (theme) => ({
  display: 'grid',
  placeItems: 'center',
  width: 44,
  height: 44,
  border: '1px solid rgba(45, 212, 191, 0.2)',
  borderColor:
    theme.palette.mode === 'light' ? 'rgba(20, 184, 166, 0.25)' : 'rgba(45, 212, 191, 0.2)',
  borderRadius: '50%',
  background: theme.palette.mode === 'light' ? '#ffffff' : tokens.surfaceRaised,
  transition: 'border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease',
  '&:hover': {
    borderColor: tokens.accent,
    boxShadow: '0 0 16px rgba(45, 212, 191, 0.35)',
    transform: 'translateY(-2px)',
    '& img': {
      filter: 'grayscale(0%) brightness(1)'
    }
  }
});

const icon: SxProps<Theme> = (theme) => ({
  width: 22,
  height: 22,
  filter: theme.palette.mode === 'light' ? 'grayscale(30%)' : 'grayscale(100%) brightness(1.4)',
  transition: 'filter 0.25s ease'
});

const text: SxProps<Theme> = (theme) => ({
  m: 0,
  pb: '24px',
  color: theme.palette.mode === 'light' ? tokens.textLightMuted : tokens.textMuted,
  fontWeight: 600
});

export const Styles = {
  root,
  socials,
  link,
  icon,
  text
};
