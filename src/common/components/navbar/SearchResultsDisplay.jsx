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
  Spinner,
  useMediaQuery,
  VStack
} from '@chakra-ui/react';
import NextLink from 'next/link';

import { ErrorBox } from '@/UIElements/index.js';

const SearchResultsDisplay = ({
  queriedItems,
  loading,
  error,
  isOpen,
  setIsOpen
}) => {
  const [isGreaterThan780px] = useMediaQuery('(min-width: 768px)');

  return (
    <>
      {/* Popover for search results */}
      {isGreaterThan780px && (
        <Box pos={'fixed'} zIndex={9999}>
          <Popover
            placement={'bottom'}
            isOpen={isOpen}
            trigger={'click'}
            isLazy
          >
            <PopoverContent w={'100vw'}>
              <PopoverCloseButton onClick={() => setIsOpen(false)} />
              <Center overflowInline={'auto'}>
                <HStack>
                  <VStack>
                    <PopoverHeader>Articles</PopoverHeader>
                    <PopoverBody w={'17rem'} h={'100vh'}>
                      {error && <ErrorBox error={error.message} />}
                      {!error &&
                      queriedItems &&
                      !loading &&
                      queriedItems.posts.length > 0 ? (
                        queriedItems.posts.map((item) => (
                          <>
                            <NextLink
                              key={item.id}
                              href={`/${item.slug}`}
                              passHref
                            >
                              <Link tabIndex={-1}>
                                <Heading
                                  my={2}
                                  size={'sm'}
                                  _hover={{ color: 'brand.50' }}
                                  tabIndex={0}
                                >
                                  {item.title}
                                </Heading>
                              </Link>
                            </NextLink>
                            <Divider />
                          </>
                        ))
                      ) : (
                        <Center my={20}>
                          {loading ? (
                            <Spinner size={'lg'} />
                          ) : (
                            <Heading size={'sm'}>Nothing in Articles</Heading>
                          )}
                        </Center>
                      )}
                    </PopoverBody>
                  </VStack>
                  <VStack>
                    <PopoverHeader>Snippets</PopoverHeader>
                    <PopoverBody w={'17rem'} h={'100vh'}>
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
                              <Link tabIndex={-1}>
                                <Heading
                                  my={2}
                                  size={'sm'}
                                  _hover={{ color: 'brand.50' }}
                                  tabIndex={0}
                                >
                                  {item.title}
                                </Heading>
                              </Link>
                            </NextLink>
                            <Divider />
                          </>
                        ))
                      ) : (
                        <Center my={20}>
                          {loading ? (
                            <Spinner size={'lg'} />
                          ) : (
                            <Heading size={'sm'}>Nothing in Snippets</Heading>
                          )}
                        </Center>
                      )}
                    </PopoverBody>
                  </VStack>
                  <VStack>
                    <PopoverHeader>Categories</PopoverHeader>
                    <PopoverBody w={'17rem'} h={'100vh'}>
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
                              <Link tabIndex={-1}>
                                <Heading
                                  my={2}
                                  size={'sm'}
                                  _hover={{ color: 'brand.50' }}
                                  tabIndex={0}
                                >
                                  {item.name}
                                </Heading>
                              </Link>
                            </NextLink>
                            <Divider />
                          </>
                        ))
                      ) : (
                        <Center my={20}>
                          {loading ? (
                            <Spinner size={'lg'} />
                          ) : (
                            <Heading size={'sm'}>Nothing in Categories</Heading>
                          )}
                        </Center>
                      )}
                    </PopoverBody>
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
