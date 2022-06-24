import { Box, HStack, Text } from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';

const ErrorBox = ({ error }) => {
  return (
    <Box p={2} bg={'red'} borderRadius={'md'}>
      <HStack>
        <WarningIcon />
        <Text color={'white'}>{error}</Text>
      </HStack>
    </Box>
  );
};

export default ErrorBox;
