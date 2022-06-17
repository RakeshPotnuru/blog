import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Heading,
  SimpleGrid,
  Center,
  Button,
  Link
} from '@chakra-ui/react';
import NextLink from 'next/link';

import ArticleCard from '../../../common/UIElements/ArticleCard';

const LatestArticles = ({ posts, loading }) => {
  return (
    <Box m={{ base: '5% 10%', '2xl': '5% 15%' }}>
      <Heading color={'brand.50'}>READ LATEST ARTICLES</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        {posts.map((post, _i) => {
          return <ArticleCard key={_i} post={post} loading={loading} />;
        })}
      </SimpleGrid>
      <Center>
        <NextLink href={'/articles'} passHref>
          <Link tabIndex={-1}>
            <Button bgColor={'transparent'}>
              Browse all articles{' '}
              <Box>
                <ChevronRightIcon />
              </Box>
            </Button>
          </Link>
        </NextLink>
      </Center>
    </Box>
  );
};

export default LatestArticles;
