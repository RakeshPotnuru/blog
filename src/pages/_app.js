import { ChakraProvider } from '@chakra-ui/react';

import theme from '../theme';
import '../styles/globals.css';
import Fonts from '../theme/Fonts';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
