import React, { type FC } from 'react';
import { Box, Stack } from '@mui/material';
import { socials } from '@/content';
import { Styles } from './styles';

const Footer: FC = () => {
  return (
    <Stack component='footer' sx={Styles.root}>
      <Stack sx={Styles.socials}>
        {socials.map((link) => (
          <Box
            key={link.label}
            component='a'
            href={link.href}
            target={link.label === 'Email' ? undefined : '_blank'}
            rel='noopener noreferrer'
            aria-label={link.label}
            sx={Styles.link}
          >
            <Box component='img' src={link.icon} alt='' sx={Styles.icon} />
          </Box>
        ))}
      </Stack>
      <Box component='p' sx={Styles.text}>
        {'Thanks for checking out my portfolio 👋'}
      </Box>
    </Stack>
  );
};

export default Footer;
