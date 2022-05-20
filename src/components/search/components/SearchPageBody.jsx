import { Box, SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs, Wrap, WrapItem } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { ArticleCard, SnippetCard } from '../../../common/UIElements';

const SearchPageBody = ({ activeTab }) => {
  const [tabIndex, setTabIndex] = useState(activeTab);

  const router = useRouter();

  useEffect(() => {
    tabIndex === 0 ? router.push('/articles', { shallow: true }) : router.push('/snippets', { shallow: true });
  }, [tabIndex]);

  return (
    <Box p={10}>
      <Tabs onChange={(index) => setTabIndex(index)} defaultIndex={activeTab} isLazy>
        <TabList>
          <Tab>Articles</Tab>
          <Tab>Snippets</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SimpleGrid columns={[2, 3]} spacing={10}>
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <Wrap my={6}>
              <WrapItem>
                <SnippetCard />
              </WrapItem>
              <WrapItem>
                <SnippetCard />
              </WrapItem>
              <WrapItem>
                <SnippetCard />
              </WrapItem>
            </Wrap>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default SearchPageBody;
