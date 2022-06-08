import {
  Box,
  SimpleGrid,
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
  SnippetCard
} from '../../../common/UIElements';
import { SearchPageHeader } from './';

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
    default:
      break;
  }
};

const SearchPageBody = ({ activeTab, posts, snippets, categories }) => {
  const [isLessThan480px] = useMediaQuery('(max-width: 480px)');

  const router = useRouter();
  const { query } = router;

  const searchSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <SearchPageHeader
        activeTab={activeTab}
        searchSubmitHandler={(e) => searchSubmitHandler(e)}
      />
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
          </TabList>
          <TabPanels>
            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 3, '2xl': 4 }} spacing={10}>
                {activeTab === 0 &&
                  posts.map((post) => {
                    return <ArticleCard key={post.id} post={post} />;
                  })}
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <Wrap my={6}>
                {activeTab === 1 &&
                  snippets.map((snippet) => {
                    return <SnippetCard key={snippet.id} snippet={snippet} />;
                  })}
              </Wrap>
            </TabPanel>
            <TabPanel>
              <Wrap>
                {activeTab === 2 &&
                  categories.map((category) => {
                    return (
                      <CategoryCard key={category.id} category={category} />
                    );
                  })}
              </Wrap>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default SearchPageBody;
