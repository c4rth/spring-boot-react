import {createTheme, ThemeOptions} from '@mui/material/styles';
import InterFontWoff2 from '../fonts/inter-regular.woff2';

const themeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: '#00695f',
            contrastText: '#FFFFFF'
        },
        secondary: {
            main: '#4615b2',
        },
    },
    typography: {
        fontFamily: 'Inter',
        fontSize: 14,
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(${InterFontWoff2}) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
      `,
        },
    },
};

const theme = createTheme(themeOptions);

export default theme;