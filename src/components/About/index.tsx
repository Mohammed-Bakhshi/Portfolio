import React, { type FC } from 'react';
import { Box, Stack } from '@mui/material';
import { aboutParagraphs, portrait } from '@/content';
import { reveal, sectionTitle } from '@/styles/shared';
import { Styles } from './styles';

const About: FC = () => {
  return (
    <Stack id='about' data-reveal sx={[Styles.root, reveal]}>
      <Box component='h2' sx={sectionTitle}>
        {'About'}
      </Box>
      <Stack sx={Styles.card}>
        <Stack sx={Styles.profile}>
          <Box component='img' src={portrait.src} alt='Mohammed Bakhshi' sx={Styles.portrait} />
          <Box sx={Styles.caption}>{portrait.caption}</Box>
        </Stack>
        <Box sx={Styles.copy}>
          {aboutParagraphs.map((paragraph) => (
            <Box component='p' key={paragraph} sx={Styles.paragraph}>
              {paragraph}
            </Box>
          ))}
        </Box>
      </Stack>
    </Stack>
  );
};

export default About;
