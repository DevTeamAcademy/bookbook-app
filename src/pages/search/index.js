import React from 'react';
import PropTypes from 'prop-types';
// constants
import * as C from '../../constants';
// ui
import { Flex } from '../../ui';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export const SearchPage = props => {
  return <Flex data-testid={C.TEST_ID_SEARCH_PAGE}>search page here</Flex>;
};

export default SearchPage;

SearchPage.propTypes = {};

SearchPage.displayName = 'SearchPage';
