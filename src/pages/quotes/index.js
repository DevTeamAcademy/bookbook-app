import React from 'react';
import PropTypes from 'prop-types';
// constants
import * as C from '../../constants';
// ui
import { Flex } from '../../ui';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export const QuotesPage = props => {
  return <Flex data-testid={C.TEST_ID_QUOTES_PAGE}>quotes page here</Flex>;
};

export default QuotesPage;

QuotesPage.propTypes = {};

QuotesPage.displayName = 'QuotesPage';
