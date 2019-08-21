import React from 'react';
import PropTypes from 'prop-types';
// components
import SearchComponent from '../../components/search-component';
// ui
import { Flex } from '../../ui';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export const SearchPage = props => {
  return (
    <Flex
      p='20px'
      overflowY='auto'
      alignItems='center'
      background='#1f2532'
      flexDirection='column'
      minHeight='calc(100vh - 40px)'
    >
      <SearchComponent />
    </Flex>
  );
};

export default SearchPage;

SearchPage.propTypes = {};

SearchPage.displayName = 'SearchPage';
