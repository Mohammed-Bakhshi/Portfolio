import React, { type FC } from 'react';
import { Box, Stack } from '@mui/material';
import { jobs } from '@/content';
import { reveal, sectionTitle } from '@/styles/shared';
import { trailBorder } from '@/styles/trail';
import { Styles, trailDelays } from './styles';

const WorkHistory: FC = () => {
  return (
    <Stack id='work' data-reveal sx={[Styles.root, reveal]}>
      <Box component='h2' sx={sectionTitle}>
        {'Work History'}
      </Box>
      <Stack sx={Styles.cards}>
        {jobs.map((job, index) => (
          <Stack
            key={job.title}
            sx={[Styles.card, trailBorder({ delay: trailDelays[index], hover: true })]}
          >
            <Stack sx={Styles.header}>
              <Box component='img' src={job.icon} alt='' sx={Styles.icon} />
              <Box component='h4' sx={Styles.company}>
                {job.title}
              </Box>
            </Stack>
            <Box sx={Styles.description}>
              <Box component='p' sx={Styles.summary}>
                {job.summary}
              </Box>
              <Box component='ul' sx={Styles.points}>
                {job.points.map((point) => (
                  <Box component='li' key={point} sx={Styles.point}>
                    {point}
                  </Box>
                ))}
              </Box>
            </Box>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default WorkHistory;
