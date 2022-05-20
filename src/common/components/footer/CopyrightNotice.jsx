import {
  Box,
  Spacer,
  useColorModeValue,
  Wrap,
  WrapItem
} from '@chakra-ui/react';

const CopyrightNotice = () => {
  return (
    <Box py={5} px={20} bg={'gray.800'} color={'white'}>
      <Wrap>
        <WrapItem>
          Copyright @ {new Date().getFullYear()} itsrakesh. All rights reserved.
        </WrapItem>
        <Spacer />
        <WrapItem>v1.0.0</WrapItem>
      </Wrap>
    </Box>
  );
};

export default CopyrightNotice;
