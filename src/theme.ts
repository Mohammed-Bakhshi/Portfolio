import { createTheme } from '@mui/material/styles';
import type { ColorMode } from '@/hooks/useColorMode';
import { tokens } from '@/styles/tokens';

export const createAppTheme = (mode: ColorMode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'dark' ? tokens.accent : tokens.accentDark
      },
      background: {
        default: mode === 'dark' ? tokens.surfaceDeep : '#f6f8fa',
        paper: mode === 'dark' ? tokens.surfaceRaised : '#ffffff'
      },
      text: {
        primary: mode === 'dark' ? tokens.text : tokens.textLight,
        secondary: mode === 'dark' ? tokens.textMuted : tokens.textLightMuted
      }
    },
    typography: {
      fontFamily: '"Roboto", sans-serif'
    }
  });
