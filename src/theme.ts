import { createTheme, colorsTuple } from '@mantine/core';

const theme = createTheme({
  colors: {
    orange: colorsTuple('#f97316'),
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

export default theme;