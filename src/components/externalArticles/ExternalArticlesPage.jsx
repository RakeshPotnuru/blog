import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import ExternalArticleCard from './ExternalArticleCard';

const ExternalArticlesPage = ({ articles }) => {
  return (
    <Box m={{ base: '5%', '2xl': '5% 10%' }}>
      <Heading color={'brand.50'}>EXTERNAL ARTICLES</Heading>
      <Text my={2}>Read articles written by me on other sites.</Text>
      <SimpleGrid columns={{ base: 1, md: 3, '2xl': 4 }} spacing={5}>
        {articles.map((article) => (
          <ExternalArticleCard key={article.id} article={article} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ExternalArticlesPage;
