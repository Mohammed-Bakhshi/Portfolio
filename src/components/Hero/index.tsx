import React, { type FC } from 'react';
import { Box, Stack } from '@mui/material';
import { Styles } from './styles';

const Hero: FC = () => {
  return (
    <Stack id='home' sx={Styles.root}>
      <Box component='h1' sx={Styles.title}>
        {'Hi, My name is Mohammed '}
        <Box component='span' aria-hidden sx={Styles.wave}>
          {'👋'}
        </Box>
      </Box>
      <Box component='p' sx={Styles.subtitle}>
        {
          "Developer with 4 years' experience building TypeScript, React, and Node.js web applications — from frontend to API and cloud deployment."
        }
      </Box>
    </Stack>
  );
};

export default Hero;
