import {
  Box,
  Heading,
  SimpleGrid,
  Center,
  Button,
  Link
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

import { ArticleCard } from '@/UIElements/index.js';

const LatestArticles = ({ posts }) => {
  return (
    <Box m={{ base: '5% 10%', '2xl': '5% 15%' }}>
      <Heading color={'brand.50'}>READ LATEST ARTICLES</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
        {posts.map((post, _i) => {
          return <ArticleCard key={_i} post={post} />;
        })}
      </SimpleGrid>
      <Center>
        <NextLink href={'/articles'} passHref>
          <Link textDecor={'none'} tabIndex={-1}>
            <Button rightIcon={<ChevronRightIcon />} bgColor={'transparent'}>
              Browse all articles
            </Button>
          </Link>
        </NextLink>
      </Center>
    </Box>
  );
};

export default LatestArticles;
