import React from 'react';
import PropTypes from 'prop-types';
import SearchComponent from '../../components/search-component';
// ui
import { Flex } from '../../ui';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export const HomePage = props => {
  return (
    <Flex bg='#1f2532' py='40px'>
      <SearchComponent />
    </Flex>
  );
};

export default HomePage;

HomePage.propTypes = {};

HomePage.displayName = 'HomePages';
