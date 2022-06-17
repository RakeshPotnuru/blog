import {
  Box,
  Center,
  Divider,
  Heading,
  HStack,
  Link,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  SkeletonText,
  useMediaQuery,
  VStack
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { ErrorBox } from '../../UIElements';

const SearchResultsDisplay = ({
  queriedItems,
  loading,
  error,
  isOpen,
  setIsOpen
}) => {
  const [isLessThan780px] = useMediaQuery('(min-width: 768px)');

  return (
    <>
      {/* Popover for search results */}
      {isLessThan780px && (
        <Box pos={'fixed'} zIndex={9999}>
          <Popover
            placement={'bottom'}
            isOpen={isOpen}
            trigger={'click'}
            isLazy
          >
            <PopoverContent w={'100vw'} h={'100vh'}>
              <PopoverCloseButton onClick={() => setIsOpen(false)} />
              <Center>
                <HStack>
                  <VStack>
                    <PopoverHeader>Articles</PopoverHeader>
                    <SkeletonText
                      w={'17rem'}
                      h={'100vh'}
                      noOfLines={5}
                      isLoaded={!loading}
                    >
                      <PopoverBody>
                        {error && <ErrorBox error={error.message} />}
                        {!error &&
                        queriedItems &&
                        queriedItems.posts.length > 0 ? (
                          queriedItems.posts.map((item) => (
                            <>
                              <NextLink
                                key={item.id}
                                href={`/${item.slug}`}
                                passHref
                              >
                                <Link>
                                  <Heading
                                    my={2}
                                    size={'sm'}
                                    _hover={{ color: 'brand.50' }}
                                  >
                                    {item.title}
                                  </Heading>
                                </Link>
                              </NextLink>
                              <Divider />
                            </>
                          ))
                        ) : (
                          <Heading size={'sm'}>Nothing in Articles</Heading>
                        )}
                      </PopoverBody>
                    </SkeletonText>
                  </VStack>
                  <VStack>
                    <PopoverHeader>Snippets</PopoverHeader>
                    <SkeletonText
                      w={'17rem'}
                      h={'100vh'}
                      noOfLines={5}
                      isLoaded={!loading}
                    >
                      <PopoverBody>
                        {error && <ErrorBox error={error.message} />}
                        {!error &&
                        queriedItems &&
                        queriedItems.snippets.length > 0 ? (
                          queriedItems.snippets.map((item) => (
                            <>
                              <NextLink
                                key={item.id}
                                href={`/snippets/${item.slug}`}
                                passHref
                              >
                                <Link>
                                  <Heading
                                    my={2}
                                    size={'sm'}
                                    _hover={{ color: 'brand.50' }}
                                  >
                                    {item.title}
                                  </Heading>
                                </Link>
                              </NextLink>
                              <Divider />
                            </>
                          ))
                        ) : (
                          <Heading size={'sm'}>Nothing in Snippets</Heading>
                        )}
                      </PopoverBody>
                    </SkeletonText>
                  </VStack>
                  <VStack>
                    <PopoverHeader>Categories</PopoverHeader>
                    <SkeletonText
                      w={'17rem'}
                      h={'100vh'}
                      noOfLines={5}
                      isLoaded={!loading}
                    >
                      <PopoverBody>
                        {error && <ErrorBox error={error.message} />}
                        {!error &&
                        queriedItems &&
                        queriedItems.categories.length > 0 ? (
                          queriedItems.categories.map((item) => (
                            <>
                              <NextLink
                                key={item.id}
                                href={`/articles?c=${item.slug}`}
                                passHref
                              >
                                <Link>
                                  <Heading
                                    my={2}
                                    size={'sm'}
                                    _hover={{ color: 'brand.50' }}
                                  >
                                    {item.name}
                                  </Heading>
                                </Link>
                              </NextLink>
                              <Divider />
                            </>
                          ))
                        ) : (
                          <Heading size={'sm'}>Nothing in Categories</Heading>
                        )}
                      </PopoverBody>
                    </SkeletonText>
                  </VStack>
                </HStack>
              </Center>
            </PopoverContent>
          </Popover>
        </Box>
      )}
    </>
  );
};

export default SearchResultsDisplay;
