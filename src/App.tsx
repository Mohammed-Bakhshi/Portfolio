import React, { type FC, useMemo } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider } from '@mui/material/styles';
import { Home } from '@/sections';
import { useColorMode } from '@/hooks/useColorMode';
import { useStartAtTop } from '@/hooks/useStartAtTop';
import { globalStyles, registeredAngles } from '@/styles/global';
import { createAppTheme } from '@/theme';

const App: FC = () => {
  useStartAtTop();
  const { mode, toggle } = useColorMode();
  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <style>{registeredAngles}</style>
      <GlobalStyles styles={globalStyles} />
      <Home onToggle={toggle} />
    </ThemeProvider>
  );
};

export default App;
