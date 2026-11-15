import React, { type FC } from 'react';
import { Box, Stack } from '@mui/material';
import { projects } from '@/content';
import { reveal, sectionTitle } from '@/styles/shared';
import { Styles } from './styles';

const icons = {
  music: '♪',
  llm: '⬡',
  sheet: '▦'
} as const;

const Projects: FC = () => {
  return (
    <Stack id='projects' data-reveal sx={[Styles.root, reveal]}>
      <Box component='h1' sx={sectionTitle}>
        {'Additional Projects'}
      </Box>
      <Box sx={Styles.grid}>
        {projects.map((project) => (
          <Stack key={project.title} sx={Styles.card}>
            <Box sx={Styles.icon}>{icons[project.icon]}</Box>
            <Box component='h3' sx={Styles.title}>
              {project.title}
            </Box>
            <Box component='p' sx={Styles.description}>
              {project.description}
            </Box>
            <Box
              component='a'
              href={project.href}
              target='_blank'
              rel='noopener noreferrer'
              sx={Styles.link}
            >
              {'View Details'}
            </Box>
          </Stack>
        ))}
      </Box>
    </Stack>
  );
};

export default Projects;
