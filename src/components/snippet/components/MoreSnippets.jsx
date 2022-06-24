import { Container, Heading, SimpleGrid } from '@chakra-ui/react';

import { SnippetCard } from '../../../common/UIElements';

const MoreSnippets = ({ snippets, loading }) => {
  return (
    <Container maxW={'container.md'} my={20}>
      <Heading color={'brand.50'}>MORE SNIPPETS</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} my={10}>
        {snippets.map((snippet) => (
          <SnippetCard key={snippet.id} snippet={snippet} loading={loading} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default MoreSnippets;
