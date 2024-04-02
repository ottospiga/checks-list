import { THEMES } from '../constants';
// import { lightShadows, darkShadows } from './shadows';
// import "@fontsource/source-sans-pro";

export const baseOptions = {
  direction: 'ltr',
  typography: {
    button: {
      fontWeight: 600,
    },
    fontFamily: 'Source Sans Pro, Helvetica, Arial, Roboto',
    // fontFamily: 'Source Sans Pro',
    h1: {
      fontSize: 64,
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h2: {
      fontSize: 40,
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h3: {
      fontSize: 28,
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h4: {
      fontSize: 24,
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: 40,
      fontWeight: 700,
      lineHeight: 1.5,
    },
    subtitle1: {
      fontSize: 24,
      fontWeight: 400,
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: 20,
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: 16,
      fontWeight: 700,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.5,
    },
    button: {
      fontWeight: 600,
      lineHeight: 1.5,
    },
    caption: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: 1.5,
    },
    overline: {
      fontSize: 12,
      fontWeight: 700,
      lineHeight: 1.5,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 765,
      lg: 1440,
      xl: 1920,
    },
  },
};

export const themesOptions = {
  [THEMES.LIGHT]: {
    components: {
      MuiInputBase: {
        styleOverrides: {
          input: {
            '&::placeholder': {
              opacity: 0.86,
              color: '#42526e',
            },
          },
        },
      },
    },
    palette: {
      type: 'light',
      background: {
        default: "#407CCC"
        // default: "#F1F3F5"
      },
      primary: {
        main: '#407CCC',
        contrastText: '#fefefe',
      },
      white: {
        main: '#fefefe',
        contrastText: '#333333',
      },
      secondary: {
        main: '#131822',
        contrastText: '#fefefe',
      },
      background: {
        default: '#F1F3F5',
      },
      text: {
        primary: '#333333',
        secondary: '#bdbdbd',
        disabled: '#bdbdbd',
        hint: '#bdbdbd',
      },
      error: {
        main: '#c13939',
      },
      info: {
        main: '#407CCC',
        contrastText: '#fefefe',
      },
      success: {
        main: '#318f29',
        contrastText: '#fefefe',
      },
      running: {
        main: '#318f29',
        contrastText: '#fefefe',
      },
      attention: {
        main: '#FD9729',
        contrastText: '#333333',
      },
      setup: {
        main: '#FD9729',
        contrastText: '#333333',
      },
      low_speed: {
        main: '#ecbc13',
        contrastText: '#333333',
      },
      attention_2: {
        main: '#ecbc13',
        contrastText: '#333333',
      },
      warning: {
        main: '#C13939',
        contrastText: '#333333',
      },
      stopped: {
        main: '#C13939',
        contrastText: '#333333',
      },
      notification: {
        main: '#C13939',
        contrastText: '#333333',
      },

      blue: {
        main: '#318f29',
        contrastText: '#fefefe',
      },
      divider: 'rgba(142,142,142,0.12)',
    },
    shape: {
      borderRadius: 16,
    },
    // shadows: lightShadows,
  },
  [THEMES.DARK]: {
    components: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderBottom: '1px solid rgba(145, 158, 171, 0.24)',
          },
        },
      },
    },
    palette: {
      background: {
        default: '#171c24',
        paper: '#222b36',
      },
      divider: 'rgba(145, 158, 171, 0.24)',
      error: {
        contrastText: '#ffffff',
        main: '#f44336',
      },
      mode: 'dark',
      primary: {
        contrastText: '#ffffff',
        main: '#688eff',
      },
      success: {
        contrastText: '#ffffff',
        main: '#4caf50',
      },
      white: {
        main: '#fefefe',
        contrastText: '#333333',
      },
      text: {
        primary: '#ffffff',
        secondary: '#919eab',
      },
      warning: {
        contrastText: '#ffffff',
        main: '#ff9800',
      },
      info: {
        main: '#4175f5',
        contrastText: '#fefefe',
      },
      success: {
        main: '#318f29',
        contrastText: '#fefefe',
      },
      running: {
        main: '#318f29',
        contrastText: '#fefefe',
      },
      attention: {
        main: '#FD9729',
        contrastText: '#333333',
      },
      setup: {
        main: '#FD9729',
        contrastText: '#333333',
      },
      low_speed: {
        main: '#ecbc13',
        contrastText: '#333333',
      },
      attention_2: {
        main: '#ecbc13',
        contrastText: '#333333',
      },
      warning: {
        main: '#C13939',
        contrastText: '#333333',
      },
      stopped: {
        main: '#C13939',
        contrastText: '#333333',
      },
      notification: {
        main: '#C13939',
        contrastText: '#333333',
      },
      blue: {
        main: '#318f29',
        contrastText: '#fefefe',
      },
    },
    shape: {
      borderRadius: 16,
    },
    // shadows: darkShadows,
  },
};
