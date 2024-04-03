'use client';
import React, { useMemo, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import { ColorModeContext } from '@/components/ChangeThemeButtom';
import { themesOptions, baseOptions } from "../Global/theme";
import { THEMES } from "../Global/constants";

export default function ThemeRegistry({ children }) {
  // const [mode, setMode] = React.useState('dark');
  // const colorMode = React.useMemo(
  //   () => ({ toggleColorMode: () => {
  //       setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  //       },
  //     }),
  //   [],
  // );

  const [mode, setMode] = useState();
  const colorMode = useMemo(
    () => ({ toggleColorMode: () => {
        setMode((prevMode) => (prevMode !== true));
        },
      }),
      
    [],
  );
  
  const themeOptions = themesOptions[mode ? THEMES.DARK : THEMES.LIGHT];

  const theme = createTheme(baseOptions, themeOptions);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
