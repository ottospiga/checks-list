'use client';
import ThemeRegistry from '../ThemeRegistry/ThemeRegistry.js';
import VariablesContext from '../context/VariablesContext.js';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export default function Providers({ children }) {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <VariablesContext>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </VariablesContext>
    </LocalizationProvider>
  );
}
