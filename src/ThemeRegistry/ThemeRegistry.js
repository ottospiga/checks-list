'use client';
import * as React from 'react';
import NextAppDirEmotionCacheProvider from './EmotionCache';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { ColorModeContext } from '@/components/ChangeThemeButtom';

// import themes from './themes';

export default function ThemeRegistry({ children }) {
  const [mode, setMode] = React.useState('dark');
  const colorMode = React.useMemo(
    () => ({ toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }),
      
    [],
  );

  const theme = React.useMemo(
    () => createTheme({
        palette: {
          mode,
          

          // ...(mode === 'light'
          // ? {
          //     // palette values for light mode
          //     primary: amber,
          //     divider: amber[200],
          //     text: {
          //       primary: grey[900],
          //       secondary: grey[800],
          //     },
          //   }
          // : {
          //     // palette values for dark mode
          //     primary: deepOrange,
          //     divider: deepOrange[700],
          //     background: {
          //       default: deepOrange[900],
          //       paper: deepOrange[900],
          //     },
          //     text: {
          //       primary: '#fff',
          //       secondary: grey[500],
          //     },
          //   }),



        },
      }),
    [mode],
  );

  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ColorModeContext.Provider value={colorMode}>
        {/* <StyledEngineProvider> */}
          <ThemeProvider theme={theme}>
            <CssBaseline />
              {children}
          </ThemeProvider>
        {/* </StyledEngineProvider> */}
      </ColorModeContext.Provider>
    </NextAppDirEmotionCacheProvider>
  );
}
