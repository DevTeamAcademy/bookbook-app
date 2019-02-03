import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// constants
import * as C from '../../constants';
// contexts
import { LocaleContext } from '../../contexts/locale';
// helpers
import { getLocaleItem } from '../../helpers';
// ui
import { Flex } from '../../ui';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export const Search = props => {
  const { locale } = useContext(LocaleContext);
  return <Flex data-testid={C.TEST_ID_SEARCH}>search page here</Flex>;
};

export default Search;

Search.propTypes = {};

Search.displayName = 'Search';
