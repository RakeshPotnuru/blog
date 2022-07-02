import {
  Box,
  Center,
  SimpleGrid,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useMediaQuery,
  Wrap
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

import {
  ArticleCard,
  CategoryCard,
  ErrorBox,
  SnippetCard,
  TagCard
} from '@/UIElements/index.js';

const changeRoute = (tabIndex, router, query) => {
  switch (tabIndex) {
    case 0:
      return router.push(
        query.c
          ? `/articles?c=${query.c}`
          : query.t
          ? `/articles?t=${query.t}`
          : '/articles'
      );
    case 1:
      return router.push('/snippets');
    case 2:
      return router.push('/categories');
    case 3:
      return router.push('/tags');
    default:
      break;
  }
};

const SearchPageBody = ({
  activeTab,
  posts,
  snippets,
  categories,
  tags,
  loading,
  error
}) => {
  const [isLessThan480px] = useMediaQuery('(max-width: 480px)');

  const router = useRouter();
  const { query } = router;

  return (
    <>
      <Box p={[5, 10]}>
        <Tabs
          onChange={(index) => changeRoute(index, router, query)}
          defaultIndex={activeTab}
          isLazy
        >
          <TabList
            overflowX={isLessThan480px && 'scroll'}
            overflowY={isLessThan480px && 'hidden'}
          >
            <Tab _focus={{ outline: 'none' }}>Articles</Tab>
            <Tab _focus={{ outline: 'none' }}>Snippets</Tab>
            <Tab _focus={{ outline: 'none' }}>Categories</Tab>
            <Tab _focus={{ outline: 'none' }}>Tags</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {error ? (
                <Center>
                  <ErrorBox error={error} />
                </Center>
              ) : (
                <>
                  {activeTab === 0 && !loading && posts.length > 0 ? (
                    <SimpleGrid
                      columns={{ base: 1, md: 3, '2xl': 4 }}
                      spacing={10}
                    >
                      {posts.map((post) => {
                        return <ArticleCard key={post.id} post={post} />;
                      })}
                    </SimpleGrid>
                  ) : (
                    <Center my={20}>
                      {loading ? <Spinner size={'lg'} /> : 'No articles found'}
                    </Center>
                  )}
                </>
              )}
            </TabPanel>
            <TabPanel>
              {error ? (
                <Center>
                  <ErrorBox error={error} />
                </Center>
              ) : (
                <>
                  {activeTab === 1 && !loading && snippets.length > 0 ? (
                    <Wrap my={6}>
                      {snippets.map((snippet) => {
                        return (
                          <SnippetCard key={snippet.id} snippet={snippet} />
                        );
                      })}
                    </Wrap>
                  ) : (
                    <Center my={20}>
                      {loading ? <Spinner size={'lg'} /> : 'No snippets found'}
                    </Center>
                  )}
                </>
              )}
            </TabPanel>
            <TabPanel>
              {error ? (
                <Center>
                  <ErrorBox error={error} />
                </Center>
              ) : (
                <>
                  {activeTab === 2 && !loading && categories.length > 0 ? (
                    <Wrap>
                      {categories.map((category) => {
                        return (
                          <CategoryCard key={category.id} category={category} />
                        );
                      })}
                    </Wrap>
                  ) : (
                    <Center my={20}>
                      {loading ? (
                        <Spinner size={'lg'} />
                      ) : (
                        'No categories found'
                      )}
                    </Center>
                  )}
                </>
              )}
            </TabPanel>
            <TabPanel>
              {error ? (
                <Center>
                  <ErrorBox error={error} />
                </Center>
              ) : (
                <>
                  {activeTab === 3 && !loading && tags.length > 0 ? (
                    <Wrap>
                      {tags.map((tag, _i) => {
                        return <TagCard key={_i} tag={tag.name} />;
                      })}
                    </Wrap>
                  ) : (
                    <Center my={20}>
                      {loading ? <Spinner size={'lg'} /> : 'No tags found'}
                    </Center>
                  )}
                </>
              )}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default SearchPageBody;
