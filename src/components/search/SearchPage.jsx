import React from 'react';
import { SearchPageBody, SearchPageHeader } from './components';

const SearchPage = ({ activeTab }) => {
  return (
    <>
      <SearchPageHeader activeTab={activeTab} />
      <SearchPageBody activeTab={activeTab} />
    </>
  );
};

export default SearchPage;
