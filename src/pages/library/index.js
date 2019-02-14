import React from 'react';
import PropTypes from 'prop-types';
// constants
import * as C from '../../constants';
// ui
import { Flex } from '../../ui';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export const LibraryPage = props => {
  return <Flex data-testid={C.TEST_ID_LIBRARY_PAGE}>library page here</Flex>;
};

export default LibraryPage;

LibraryPage.propTypes = {};

LibraryPage.displayName = 'LibraryPage';
