import { extendTheme, theme as base } from '@chakra-ui/react';

import siteConfig from '../../config/site.config';

const colors = {
  brand: siteConfig.branding.colors.brand,
  text: siteConfig.branding.colors.text,
  twitter: '#1DA1F2',
  linkedin: '#0077B5',
  facebook: '#1877F2'
};

const fonts = {
  heading: `${siteConfig.branding.fonts.heading}, ${base.fonts?.heading}`,
  body: `${siteConfig.branding.fonts.body}, ${base.fonts?.body}`
};

const config = {
  useSystemColorMode: true
};

const theme = extendTheme({ colors, fonts, config });

export default theme;
