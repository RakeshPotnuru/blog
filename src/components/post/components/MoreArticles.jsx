import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react';

import { ArticleCard } from '@/UIElements/index.js';
import { AdSense } from 'common/utils';

const RelatedArticles = ({ posts }) => {
  return (
    <>
      <Container maxW={'container.md'} my={20}>
        <Heading color={'brand.50'}>MORE ARTICLES</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
          {posts.map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </SimpleGrid>
      </Container>
      <Box my={20}>
        <AdSense
          style={{ display: 'block' }}
          adFormat={'fluid'}
          adSlot={'3408517885'}
          data-ad-layout-key={'-f9+52+6z-e1+5b'}
        />
      </Box>
    </>
  );
};

export default RelatedArticles;
