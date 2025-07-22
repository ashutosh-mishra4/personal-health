import { createTheme, colorsTuple, CSSVariablesResolver } from '@mantine/core';

const theme = createTheme({
  colors: {
    orange: colorsTuple('#f97316'),
    orangeLight: colorsTuple('#fff7ed'),
    cyan: colorsTuple('#06b6d4'),
    purple: colorsTuple('#8b5cf6'),
    slate: colorsTuple('#475569'),
    gray: colorsTuple('#64748b')
  },
  primaryColor: 'orange',
  white: '#ffffff',
  black: '#1e293b',
  fontFamily: 'Manrope, sans-serif',
  headings: {
    fontFamily: 'Manrope, sans-serif',
    fontWeight: '700'
  },
  defaultRadius: 'md',
  shadows: {
    sm: '0px 4px 22px rgba(159, 159, 159, 0.15)',
    md: '0px 5px 22px 4px rgba(0, 0, 0, 0.02), 0px 12px 17px 2px rgba(0, 0, 0, 0.03)'
  }
});

export const cssVariablesResolver: CSSVariablesResolver = (theme) => ({
  variables: {
    '--tab-bg': 'red',
    '--tab-hover-color': 'red',
  },
  light: {
    '--tab-bg': theme.colors.orangeLight[7],
    '--tab-hover-color': 'red',
  },
  dark: {
    '--tab-bg': theme.colors.orangeLight[7],
    '--tab-hover-color': 'red',
  },
});

export default theme;