import { Box, Flex, Spacer, Text } from '@chakra-ui/react';

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
        <Text>
          @ {new Date().getFullYear()} itsrakesh. All rights reserved.
        </Text>
        <Spacer />
        <Text>v1.0.0</Text>
      </Flex>
    </Box>
  );
};

export default CopyrightNotice;
