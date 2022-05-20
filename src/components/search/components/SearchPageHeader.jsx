import { Search2Icon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  VStack
} from '@chakra-ui/react';

const SearchPageHeader = ({ activeTab }) => {
  const inputBg = useColorModeValue('white', '#1A202C');

  return (
    <Box
      bgGradient={
        'linear( 102.4deg,  rgba(253,189,85,1) 7.8%, rgba(249,131,255,1) 100.3% )'
      }
    >
      <Box py={20}>
        <Center>
          <VStack spacing={6}>
            <Heading color={'white'}>What you want to {activeTab === 0 ? 'read' : 'know'}?</Heading>
            <form>
              <InputGroup>
                <InputLeftElement pointerEvents={'none'}>
                  <Search2Icon />
                </InputLeftElement>
                <Input
                  type={'text'}
                  placeholder={`Search ${activeTab === 0 ? 'articles' : 'snippets'}...`}
                  bg={inputBg}
                />
              </InputGroup>
            </form>
          </VStack>
        </Center>
      </Box>
    </Box>
  );
};

export default SearchPageHeader;
