import type { SxProps, Theme } from '@mui/material/styles';
import { tokens } from '@/styles/tokens';

const root: SxProps<Theme> = {
  m: 0,
  '& .MuiSwitch-switchBase': {
    color: tokens.textMuted,
    '&.Mui-checked': {
      color: tokens.accent,
      '& + .MuiSwitch-track': {
        backgroundColor: 'rgba(45, 212, 191, 0.35)'
      }
    }
  },
  '& .MuiSwitch-track': {
    backgroundColor: 'rgba(139, 148, 158, 0.4)'
  }
};

export const Styles = {
  root
};
