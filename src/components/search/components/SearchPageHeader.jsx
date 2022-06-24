import {
  Box,
  Center,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  useMediaQuery,
  VStack
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

const changePlaceholderText = (param) => {
  switch (param) {
    case 0:
      return 'articles';
    case 1:
      return 'snippets';
    case 2:
      return 'categories';
    case 3:
      return 'tags';
    default:
      break;
  }
};

const SearchPageHeader = ({ activeTab, searchHandler }) => {
  const [isLessThan480px] = useMediaQuery('(max-width: 480px)');
  const inputBg = useColorModeValue('white', '#1A202C');

  return (
    <>
      {/* Search input on mobile screens */}
      {isLessThan480px ? (
        <form onSubmit={(e) => searchHandler(e)}>
          <InputGroup m={7}>
            <InputLeftElement pointerEvents={'none'}>
              <Search2Icon />
            </InputLeftElement>
            <Input
              type={'text'}
              name={'search'}
              placeholder={`Search ${changePlaceholderText(activeTab)}...`}
              bg={inputBg}
              w={'85%'}
            />
          </InputGroup>
        </form>
      ) : (
        <Box
          bgGradient={
            'linear( 102.4deg,  rgba(253,189,85,1) 7.8%, rgba(249,131,255,1) 100.3% )'
          }
        >
          {/* Search input on all screens expect mobile */}
          <Box py={20}>
            <Center>
              <VStack spacing={6}>
                <Heading color={'white'}>
                  What you want to {activeTab === 0 ? 'read' : 'explore'}?
                </Heading>
                <form onSubmit={(e) => searchHandler(e)}>
                  <InputGroup>
                    <InputLeftElement pointerEvents={'none'}>
                      <Search2Icon />
                    </InputLeftElement>
                    <Input
                      type={'text'}
                      name={'search'}
                      placeholder={`Search ${changePlaceholderText(
                        activeTab
                      )}...`}
                      bg={inputBg}
                    />
                  </InputGroup>
                </form>
              </VStack>
            </Center>
          </Box>
        </Box>
      )}
    </>
  );
};

export default SearchPageHeader;
