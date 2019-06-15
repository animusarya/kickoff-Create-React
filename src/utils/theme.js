import { createGlobalStyle } from 'styled-components';

export const elements = { mobileBreakpoint: 800, ipadBreakpoint: 1024 };

// http://chir.ag/projects/name-that-color/
export const colors = {
  black: '#000000',
  riptide: '#0AF9C4'
};

const theme = {
  mobileBreakpoint: `${elements.mobileBreakpoint}px`,
  ipadBreakpoint: `${elements.ipadBreakpoint}px`,
  primaryColor: colors.black,
  secondaryColor: colors.riptide,
  primaryFontFamily: '"Quicksand", sans-serif',
  secondaryFontFamily: '"Open Sans", sans-serif',
  fontWeightLight: '300',
  fontWeightRegular: '400',
  fontWeightSemiBold: '600',
  fontWeightBold: '700',
  fontSizeReguar: '400',
  borderColor: '#D6D6D6'
};

export default theme;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    background: #ffff;
  }
  .hero-body{
    padding:0;
  }
`;
