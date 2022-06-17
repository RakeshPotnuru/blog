import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Spacer,
  Text,
  VStack
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

import { CategoryCard } from '../../../common/UIElements';

const Hero = ({ featuredPost, categories, loading }) => {
  return (
    <Box m={{ base: '5% 10%', '2xl': '5% 15%' }}>
      <Flex flexDirection={{ base: 'column', md: 'row' }}>
        <VStack w={{ base: '100%', md: '60%' }}>
          {/* Featured Post cover image */}
          <Skeleton isLoaded={!loading}>
            <NextLink href={`/${featuredPost.slug}`} passHref>
              <Link tabIndex={-1}>
                <Image
                  src={featuredPost.featuredImage.url}
                  alt={featuredPost.title}
                  tabIndex={0}
                />
              </Link>
            </NextLink>
          </Skeleton>

          <Box
            p={1}
            px={3}
            w={'fit-content'}
            bg={'black'}
            borderRadius={'md'}
            alignSelf={'self-start'}
            fontWeight={'bold'}
          >
            <Text bgGradient={'linear(to-l, #7928CA, #FF0080)'} bgClip={'text'}>
              FEATURED
            </Text>
          </Box>

          {/* Featured Post title */}
          <SkeletonText noOfLines={1} isLoaded={!loading}>
            <NextLink href={`/${featuredPost.slug}`} passHref>
              <Link alignSelf={'self-start'} tabIndex={-1}>
                <Heading
                  size={'lg'}
                  tabIndex={0}
                  _hover={{ color: 'brand.50' }}
                >
                  {featuredPost.title}
                </Heading>
              </Link>
            </NextLink>
          </SkeletonText>
        </VStack>

        <Spacer />

        {/* Categories */}
        <Box>
          <SimpleGrid columns={[2, 2]}>
            {categories.map((category) => {
              return <CategoryCard key={category.id} category={category} />;
            })}
          </SimpleGrid>
          <Center>
            <NextLink href={'/categories'} passHref>
              <Link tabIndex={-1}>
                <Button bgColor={'transparent'}>
                  Browse all categories{' '}
                  <Box>
                    <ChevronRightIcon />
                  </Box>
                </Button>
              </Link>
            </NextLink>
          </Center>
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
