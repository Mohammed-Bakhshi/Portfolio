import React, { type FC } from 'react';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import Switch from '@mui/material/Switch';
import { useTheme } from '@mui/material/styles';
import { Styles } from './styles';

interface IThemeToggleProps {
  onToggle: () => void;
}

const ThemeToggle: FC<IThemeToggleProps> = ({ onToggle }) => {
  const theme = useTheme();

  return (
    <Switch
      sx={Styles.root}
      checked={theme.palette.mode === 'dark'}
      onChange={onToggle}
      icon={<LightModeOutlinedIcon fontSize='small' />}
      checkedIcon={<DarkModeOutlinedIcon fontSize='small' />}
      slotProps={{ input: { 'aria-label': 'Toggle colour mode' } }}
    />
  );
};

export default ThemeToggle;
