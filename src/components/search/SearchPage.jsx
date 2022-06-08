import React from 'react';
import { SearchPageBody } from './components';

const SearchPage = ({ activeTab, posts, snippets, categories }) => {
  return (
    <SearchPageBody
      activeTab={activeTab}
      posts={posts}
      snippets={snippets}
      categories={categories}
    />
  );
};

export default SearchPage;
