'use client'
import React, { createContext, useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function ChangeThemeButtom() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <>
      {theme.palette.mode} mode
      <IconButton 
        sx={{ ml: 1 }} 
        onClick={colorMode.toggleColorMode} 
        color="inherit"
      >
        {theme.palette.mode === 'dark' 
          ? <Brightness7Icon /> 
          : <Brightness4Icon />
        }
      </IconButton>
    </>
  );
};
