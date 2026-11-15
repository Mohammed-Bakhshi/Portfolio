import type { SxProps, Theme } from '@mui/material/styles';
import { reduceMotion, tokens } from '@/styles/tokens';

export const sectionTitle = {
  m: 0,
  mb: `${tokens.sectionGap}px`,
  color: tokens.accent,
  fontSize: '1.75rem',
  fontWeight: 600,
  textAlign: 'center'
} satisfies SxProps<Theme>;

export const reveal = {
  opacity: 0,
  transform: 'translateY(32px)',
  transition: 'opacity 0.65s ease-out, transform 0.65s ease-out',
  '&[data-visible="true"]': {
    opacity: 1,
    transform: 'translateY(0)'
  },
  [reduceMotion]: {
    opacity: 1,
    transform: 'none',
    transition: 'none'
  }
} satisfies SxProps<Theme>;
