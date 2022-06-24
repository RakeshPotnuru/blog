import { Box, Flex, Spacer, Text } from '@chakra-ui/react';

import siteConfig from '../../../../config/site.config';

const CopyrightNotice = () => {
  return (
    <Box
      id={'copyright'}
      py={5}
      px={{ base: 10, md: 20 }}
      bg={'gray.800'}
      color={'white'}
    >
      <Flex direction={{ base: 'column', md: 'row' }}>
        <Text>{siteConfig.copyrightText}</Text>
        <Spacer />
        <Text>v{siteConfig.siteVersion}</Text>
      </Flex>
    </Box>
  );
};

export default CopyrightNotice;
