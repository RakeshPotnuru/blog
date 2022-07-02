import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Spacer,
  Text,
  VStack
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { Resize } from '@cloudinary/url-gen/actions';

import { CategoryCard } from '@/UIElements/index.js';
import { buildImage } from '@/utils/index.js';

const Hero = ({ featuredPost, categories }) => {
  return (
    <Box m={{ base: '5%', md: '5% 10%', '2xl': '5% 15%' }}>
      <Flex flexDirection={{ base: 'column', md: 'row' }}>
        <VStack w={{ base: '100%', md: '60%' }}>
          {/* Featured Post cover image */}
          <NextLink href={`/${featuredPost.slug}`} passHref>
            <Link tabIndex={-1}>
              <Image
                src={buildImage(featuredPost.featuredImage.public_id)
                  .resize(Resize.scale().width(1600).height(840))
                  .toURL()}
                alt={featuredPost.title}
                htmlWidth={'100%'}
                htmlHeight={'auto'}
                tabIndex={0}
              />
            </Link>
          </NextLink>

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
          <NextLink href={`/${featuredPost.slug}`} passHref>
            <Link tabIndex={-1}>
              <Heading
                size={'lg'}
                tabIndex={0}
                alignSelf={'self-start'}
                _hover={{ color: 'brand.50' }}
              >
                {featuredPost.title}
              </Heading>
            </Link>
          </NextLink>
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
              <Link textDecor={'none'} tabIndex={-1}>
                <Button
                  rightIcon={<ChevronRightIcon />}
                  bgColor={'transparent'}
                >
                  Browse all categories
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
