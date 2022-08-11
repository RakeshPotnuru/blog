import React, { useEffect, useState } from 'react';
import { Box, Center } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useLazyQuery } from '@apollo/client/react';

import { SearchPageBody, SearchPageHeader } from './components';
import { queries } from './queries';
import { AdSense } from 'common/utils';
import siteConfig from '../../../config/site.config';

const SearchPage = ({
  activeTab,
  posts,
  snippets,
  categories,
  tags,
  error
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [queriedPosts, setQueriedPosts] = useState([]);
  const [queriedSnippets, setQueriedSnippets] = useState([]);
  const [queriedCategories, setQueriedCategories] = useState([]);
  const [queriedTags, setQueriedTags] = useState([]);
  const [variableError, setVariableError] = useState(null);

  const router = useRouter();
  const { query } = router;

  const [getData, { data, loading, error: queryError }] = useLazyQuery(
    activeTab === 0
      ? query.c
        ? queries.GET_ARTICLES_MATCHING_CATEGORY
        : query.t
        ? queries.GET_ARTICLES_MATCHING_TAG
        : queries.GET_ARTICLES
      : activeTab === 1
      ? queries.GET_SNIPPETS
      : queries.GET_CATEGORIES,
    {
      variables: {
        searchQuery: searchQuery
      }
    }
  );

  useEffect(() => {
    if (activeTab === 0) {
      setQueriedPosts(data?.posts || posts);
    } else if (activeTab === 1) {
      setQueriedSnippets(data?.snippets || snippets);
    } else if (activeTab === 2) {
      setQueriedCategories(data?.categories || categories);
    } else {
      setQueriedTags(
        (searchQuery && tags.filter((tag) => searchQuery === tag.name)) || tags
      );
    }
    setVariableError(queryError || error);
  }, [data, searchQuery]);

  useEffect(() => {
    if (query.c) {
      setSearchQuery(query.c);
      getData();
    } else if (query.t) {
      setSearchQuery(query.t);
      getData();
    }
  }, [query]);

  const searchHandler = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.search.value);
    getData();
  };

  return (
    <>
      <SearchPageHeader
        activeTab={activeTab}
        posts={queriedPosts}
        snippets={queriedSnippets}
        categories={queriedCategories}
        searchHandler={searchHandler}
      />
      <SearchPageBody
        key={activeTab}
        activeTab={activeTab}
        posts={queriedPosts}
        snippets={queriedSnippets}
        categories={queriedCategories}
        tags={queriedTags}
        loading={loading}
        error={variableError}
      />
      <Box my={20} mx={'auto'}>
        <AdSense
          style={{ display: 'block' }}
          adFormat={'fluid'}
          adSlot={siteConfig.adsense.slots.inFeed}
          data-ad-layout-key={'-f9+52+6z-e1+5b'}
        />
      </Box>
    </>
  );
};

export default SearchPage;
