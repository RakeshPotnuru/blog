import { Container, Heading, SimpleGrid } from '@chakra-ui/react';

import { ArticleCard } from '@/UIElements/index.js';

const RelatedArticles = ({ posts }) => {
  return (
    <Container maxW={'container.md'} my={20}>
      <Heading color={'brand.50'}>MORE ARTICLES</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        {posts.map((post) => (
          <ArticleCard key={post.id} post={post} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default RelatedArticles;
