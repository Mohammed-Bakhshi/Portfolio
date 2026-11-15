import type { SxProps, Theme } from '@mui/material/styles';
import { tokens } from '@/styles/tokens';

const page: SxProps<Theme> = (theme) => ({
  minHeight: '100vh',
  boxSizing: 'border-box',
  width: '100%',
  pt: `calc(${tokens.navHeight}px + ${tokens.sectionGap}px)`,
  px: '20px',
  pb: '20px',
  overflowX: 'hidden',
  color: theme.palette.mode === 'light' ? tokens.textLight : tokens.text,
  fontFamily: '"Roboto", sans-serif',
  background:
    theme.palette.mode === 'light'
      ? 'linear-gradient(160deg, #f6f8fa 0%, #eef2f6 50%, #e8edf2 100%)'
      : `linear-gradient(160deg, ${tokens.surfaceDeep} 0%, ${tokens.surfaceMid} 45%, #0d1520 100%)`
});

export const Styles = {
  page
};
