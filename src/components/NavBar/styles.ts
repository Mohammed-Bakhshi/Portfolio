import type { SxProps, Theme } from '@mui/material/styles';
import { mobile, tokens } from '@/styles/tokens';

const root: SxProps<Theme> = (theme) => ({
  position: 'fixed',
  top: 0,
  right: 0,
  left: 0,
  zIndex: 100,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '16px',
  boxSizing: 'border-box',
  width: '100%',
  height: tokens.navHeight,
  px: '28px',
  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
  background: 'rgba(13, 17, 23, 0.45)',
  backdropFilter: 'blur(20px) saturate(160%)',
  boxShadow: 'none',
  transition: 'background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
  ...(theme.palette.mode === 'light' && {
    borderBottomColor: 'rgba(0, 0, 0, 0.06)',
    background: 'rgba(246, 248, 250, 0.55)'
  }),
  [mobile]: {
    px: '16px'
  }
});

const scrolled: SxProps<Theme> = (theme) => ({
  borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  background: 'rgba(13, 17, 23, 0.78)',
  boxShadow:
    '0 4px 6px rgba(0, 0, 0, 0.08), 0 12px 32px rgba(0, 0, 0, 0.28), 0 1px 0 rgba(45, 212, 191, 0.08)',
  ...(theme.palette.mode === 'light' && {
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    background: 'rgba(246, 248, 250, 0.88)',
    boxShadow:
      '0 4px 6px rgba(0, 0, 0, 0.04), 0 12px 28px rgba(0, 0, 0, 0.12), 0 1px 0 rgba(45, 212, 191, 0.15)'
  })
});

const brand: SxProps<Theme> = {
  zIndex: 102,
  color: tokens.accent,
  fontSize: '1.1rem',
  fontWeight: 600,
  textDecoration: 'none',
  whiteSpace: 'nowrap'
};

const desktop: SxProps<Theme> = {
  [mobile]: {
    display: 'none'
  }
};

const links: SxProps<Theme> = {
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px 24px'
};

const link: SxProps<Theme> = (theme) => ({
  position: 'relative',
  px: '4px',
  py: '8px',
  color: theme.palette.mode === 'light' ? tokens.textLight : tokens.text,
  fontSize: '0.95rem',
  textDecoration: 'none',
  transition: 'color 0.2s ease',
  '&::after': {
    content: '""',
    position: 'absolute',
    right: 0,
    bottom: '2px',
    left: 0,
    height: '2px',
    borderRadius: '1px',
    background: tokens.accent,
    transform: 'scaleX(0)',
    transformOrigin: 'center',
    transition: 'transform 0.25s ease'
  },
  '&:hover': {
    color: tokens.accent,
    '&::after': {
      transform: 'scaleX(1)'
    }
  }
});

const linkActive: SxProps<Theme> = {
  color: tokens.accent,
  '&::after': {
    transform: 'scaleX(1)'
  }
};

const actions: SxProps<Theme> = {
  flexDirection: 'row',
  flexShrink: 0,
  alignItems: 'center',
  gap: '8px'
};

const action: SxProps<Theme> = (theme) => ({
  px: '12px',
  py: '6px',
  border: `1px solid ${tokens.accent}`,
  borderRadius: '6px',
  color: tokens.accent,
  fontSize: '0.8rem',
  fontWeight: 600,
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  transition: 'background 0.2s ease, color 0.2s ease',
  '&:hover': {
    color: theme.palette.mode === 'light' ? '#ffffff' : '#0d1117',
    background: tokens.accent
  }
});

const burger: SxProps<Theme> = {
  display: 'none',
  [mobile]: {
    zIndex: 102,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '5px',
    width: 40,
    height: 40,
    p: 0,
    border: '1px solid rgba(45, 212, 191, 0.25)',
    borderRadius: '8px',
    background: tokens.surfaceRaised,
    cursor: 'pointer'
  }
};

const burgerLine = (open: boolean, index: number): SxProps<Theme> => ({
  display: 'block',
  width: 18,
  height: 2,
  mx: 'auto',
  borderRadius: '1px',
  background: tokens.accent,
  transition: 'transform 0.25s ease, opacity 0.25s ease',
  ...(open && index === 0 && { transform: 'translateY(7px) rotate(45deg)' }),
  ...(open && index === 1 && { opacity: 0 }),
  ...(open && index === 2 && { transform: 'translateY(-7px) rotate(-45deg)' })
});

const backdrop: SxProps<Theme> = {
  display: 'none',
  [mobile]: {
    display: 'block',
    position: 'fixed',
    inset: 0,
    zIndex: 99,
    p: 0,
    border: 'none',
    background: 'rgba(6, 10, 16, 0.65)',
    backdropFilter: 'blur(4px)',
    cursor: 'pointer'
  }
};

const drawer =
  (open: boolean): SxProps<Theme> =>
  (theme) => ({
    display: 'none',
    [mobile]: {
      position: 'fixed',
      top: tokens.navHeight,
      right: 0,
      left: 0,
      zIndex: 101,
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      maxHeight: `calc(100vh - ${tokens.navHeight}px)`,
      p: '16px',
      borderBottom: '1px solid rgba(45, 212, 191, 0.12)',
      background: 'rgba(13, 17, 23, 0.95)',
      backdropFilter: 'blur(16px)',
      overflowY: 'auto',
      opacity: open ? 1 : 0,
      transform: open ? 'translateY(0)' : 'translateY(-12px)',
      pointerEvents: open ? 'auto' : 'none',
      transition: 'opacity 0.25s ease, transform 0.25s ease',
      ...(theme.palette.mode === 'light' && {
        background: 'rgba(246, 248, 250, 0.97)',
        borderBottomColor: 'rgba(20, 184, 166, 0.2)'
      })
    }
  });

const drawerGroup: SxProps<Theme> = {
  [mobile]: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }
};

const drawerFooter: SxProps<Theme> = {
  [mobile]: {
    pt: '8px',
    borderTop: '1px solid rgba(45, 212, 191, 0.12)'
  }
};

const drawerItem: SxProps<Theme> = (theme) => ({
  display: 'block',
  px: '16px',
  py: '14px',
  border: '1px solid rgba(45, 212, 191, 0.12)',
  borderRadius: '8px',
  color: theme.palette.mode === 'light' ? tokens.textLight : tokens.textStrong,
  fontSize: '1rem',
  fontWeight: 500,
  textDecoration: 'none',
  background: theme.palette.mode === 'light' ? '#ffffff' : tokens.surfaceRaised,
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
  transition: 'background 0.2s ease, border-color 0.2s ease, color 0.2s ease',
  '&:hover': {
    borderColor: 'rgba(45, 212, 191, 0.35)',
    background:
      theme.palette.mode === 'light' ? 'rgba(45, 212, 191, 0.1)' : 'rgba(45, 212, 191, 0.08)',
    color: tokens.accent
  }
});

const drawerItemActive: SxProps<Theme> = {
  borderColor: tokens.accent,
  color: tokens.accent,
  background: tokens.accentMuted
};

const drawerTheme: SxProps<Theme> = (theme) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: theme.palette.mode === 'light' ? tokens.textLight : tokens.text,
  cursor: 'default',
  '&:hover': {
    color: theme.palette.mode === 'light' ? tokens.textLight : tokens.text,
    background: theme.palette.mode === 'light' ? '#ffffff' : tokens.surfaceRaised,
    borderColor: 'rgba(45, 212, 191, 0.12)'
  }
});

const drawerLabel: SxProps<Theme> = {
  fontSize: '0.95rem'
};

export const Styles = {
  root,
  scrolled,
  brand,
  desktop,
  links,
  link,
  linkActive,
  actions,
  action,
  burger,
  burgerLine,
  backdrop,
  drawer,
  drawerGroup,
  drawerFooter,
  drawerItem,
  drawerItemActive,
  drawerTheme,
  drawerLabel
};
