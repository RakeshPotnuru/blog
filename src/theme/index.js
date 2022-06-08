import { extendTheme, theme as base } from '@chakra-ui/react';

const colors = {
  brand: {
    50: '#7868E6',
    100: '#FF5403',
    200: '#FF2E63',
    300: '#FFCC00',
    400: '#48466D',
    500: '#769FCD'
  },
  text: '#454E56',
  twitter: '#1DA1F2',
  linkedin: '#0077B5',
  facebook: '#1877F2'
};

const fonts = {
  heading: `Alliance No 2, ${base.fonts?.heading}`,
  body: `Poppins, ${base.fonts?.body}`
};

const config = {
  useSystemColorMode: false // TODO: change to true
};

const theme = extendTheme({ colors, fonts, config });

export default theme;
