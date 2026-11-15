import type { SxProps, Theme } from '@mui/material/styles';
import { sectionTitle } from '@/styles/shared';
import { mobile, reduceMotion, tokens } from '@/styles/tokens';

const ringMask = 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)';

const root: SxProps<Theme> = {
  maxWidth: 900,
  width: '100%',
  mx: 'auto',
  px: '20px',
  pt: `${tokens.sectionGap}px`
};

const title: SxProps<Theme> = {
  ...sectionTitle,
  position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    width: 48,
    height: 2,
    mt: '12px',
    mx: 'auto',
    borderRadius: '1px',
    background: `linear-gradient(90deg, transparent, ${tokens.accent}, transparent)`,
    animation: 'title-pulse 2.5s ease-in-out infinite',
    [reduceMotion]: {
      animation: 'none'
    }
  }
};

const row: SxProps<Theme> = {
  flexDirection: 'row',
  alignItems: 'stretch',
  gap: '40px',
  [mobile]: {
    flexDirection: 'column',
    gap: '24px'
  }
};

const panel =
  (delay?: string): SxProps<Theme> =>
  (theme) => ({
    flex: 1,
    position: 'relative',
    isolation: 'isolate',
    overflow: 'hidden',
    borderRadius: '12px',
    color: theme.palette.mode === 'light' ? tokens.textLight : tokens.text,
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      padding: '2px',
      borderRadius: 'inherit',
      background:
        'conic-gradient(from var(--skill-trail-angle), transparent 0deg 285deg, rgba(20, 184, 166, 0.4) 300deg, rgba(45, 212, 191, 0.85) 320deg, rgba(94, 234, 212, 0.95) 330deg, rgba(45, 212, 191, 0.85) 340deg, rgba(20, 184, 166, 0.4) 355deg, transparent 360deg)',
      pointerEvents: 'none',
      animation: 'skill-trail-rotate 4s linear infinite',
      animationDelay: delay,
      WebkitMask: ringMask,
      mask: ringMask,
      WebkitMaskComposite: 'xor',
      maskComposite: 'exclude',
      [reduceMotion]: {
        animation: 'none',
        opacity: 0.35
      }
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      inset: '2px',
      zIndex: 0,
      borderRadius: '10px',
      background: theme.palette.mode === 'light' ? '#ffffff' : tokens.surfaceRaised,
      pointerEvents: 'none'
    }
  });

const content: SxProps<Theme> = {
  position: 'relative',
  zIndex: 1,
  flex: 1,
  p: '36px',
  [mobile]: {
    p: '28px'
  }
};

const panelTitle: SxProps<Theme> = {
  m: 0,
  mb: '20px',
  color: tokens.accent,
  fontSize: '1.1rem',
  fontWeight: 600
};

const group: SxProps<Theme> = {
  mb: '20px',
  '&:last-child': {
    mb: 0
  }
};

const groupTitle: SxProps<Theme> = (theme) => ({
  m: 0,
  mb: '10px',
  color: theme.palette.mode === 'light' ? tokens.textLightMuted : tokens.textMuted,
  fontSize: '0.85rem',
  fontWeight: 600,
  letterSpacing: '0.04em',
  textTransform: 'uppercase'
});

const list: SxProps<Theme> = {
  m: 0,
  p: 0,
  lineHeight: 1.85,
  listStyle: 'none',
  textAlign: 'left'
};

const item: SxProps<Theme> = {
  position: 'relative',
  py: '5px',
  pl: '14px',
  '&::before': {
    content: '"·"',
    position: 'absolute',
    left: 0,
    color: tokens.accent,
    fontWeight: 700
  }
};

export const Styles = {
  root,
  title,
  row,
  panel,
  content,
  panelTitle,
  group,
  groupTitle,
  list,
  item
};
