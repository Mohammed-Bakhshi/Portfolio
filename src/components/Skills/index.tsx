import React, { type FC } from 'react';
import { Box, Stack } from '@mui/material';
import { skillGroups, softSkillGroups } from '@/content';
import { reveal } from '@/styles/shared';
import { Styles } from './styles';

interface ISkillGroup {
  title: string;
  items: readonly string[];
}

interface ISkillPanelProps {
  title: string;
  groups: readonly ISkillGroup[];
  delay?: string;
}

const SkillPanel: FC<ISkillPanelProps> = ({ title, groups, delay }) => {
  return (
    <Stack sx={Styles.panel(delay)}>
      <Stack sx={Styles.content}>
        <Box component='h3' sx={Styles.panelTitle}>
          {title}
        </Box>
        {groups.map((group) => (
          <Box key={group.title} sx={Styles.group}>
            <Box component='h4' sx={Styles.groupTitle}>
              {group.title}
            </Box>
            <Box component='ul' sx={Styles.list}>
              {group.items.map((item) => (
                <Box component='li' key={item} sx={Styles.item}>
                  {item}
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

const Skills: FC = () => {
  return (
    <Stack id='skills' data-reveal sx={[Styles.root, reveal]}>
      <Box component='h2' sx={Styles.title}>
        {'Skills'}
      </Box>
      <Stack sx={Styles.row}>
        <SkillPanel title='Technical Skills' groups={skillGroups} />
        <SkillPanel title='Soft Skills' groups={softSkillGroups} delay='-2s' />
      </Stack>
    </Stack>
  );
};

export default Skills;
