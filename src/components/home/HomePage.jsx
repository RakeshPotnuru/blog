import { Hero, LatestArticles, LatestSnippets } from './components';

const HomePage = ({
  featuredPost,
  posts,
  snippets,
  categories,
  loading,
  error
}) => {
  return (
    <>
      {error ? (
        <Center mt={8}>
          <ErrorBox error={error} />
        </Center>
      ) : (
        <>
          <Hero
            featuredPost={featuredPost}
            categories={categories}
            loading={loading}
          />
          <LatestArticles posts={posts} loading={loading} />
          <LatestSnippets snippets={snippets} loading={loading} />
        </>
      )}
    </>
  );
};

export default HomePage;
