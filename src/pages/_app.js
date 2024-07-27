import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';

import { Banner } from '@/components/misc';
import { client } from '@/utils/index.js';
import siteConfig from '../../config/site.config';
import '../styles/globals.css';
import theme from '../theme';
import Fonts from '../theme/Fonts';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Fonts />
        {siteConfig.showBanner && <Banner />}
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
};

export default MyApp;
