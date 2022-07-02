import { Center } from '@chakra-ui/react';

import { ErrorBox } from '@/UIElements/index.js';
import { Hero, LatestArticles, LatestSnippets } from './components';

const HomePage = ({ featuredPost, posts, snippets, categories, error }) => {
  return (
    <>
      {error ? (
        <Center mt={8}>
          <ErrorBox error={error} />
        </Center>
      ) : (
        <>
          <Hero featuredPost={featuredPost} categories={categories} />
          <LatestArticles posts={posts} />
          <LatestSnippets snippets={snippets} />
        </>
      )}
    </>
  );
};

export default HomePage;
