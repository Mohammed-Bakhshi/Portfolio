import React, { type FC } from 'react';
import { Stack } from '@mui/material';
import { About, Footer, Hero, NavBar, Projects, Skills, WorkHistory } from '@/components';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Styles } from './styles';

interface IHomeProps {
  onToggle: () => void;
}

const Home: FC<IHomeProps> = ({ onToggle }) => {
  useScrollReveal();

  return (
    <Stack sx={Styles.page}>
      <NavBar onToggle={onToggle} />
      <Hero />
      <About />
      <WorkHistory />
      <Skills />
      <Projects />
      <Footer />
    </Stack>
  );
};

export default Home;
