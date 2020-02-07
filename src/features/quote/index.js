import React from 'react';
import { pathOr } from 'ramda';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirebaseConnect } from 'react-redux-firebase';
// ui
import { Box, Flex } from '../../ui';
// //////////////////////////////////////////////////

export const QuotesPage = props => {
  useFirebaseConnect('quotes');

  const quotes = useSelector(state => pathOr([], ['firebase', 'ordered', 'quotes'], state));

  return (
    <Flex flexDirection='column'>
      {quotes.map(item => (
        <Box>{item.value.quote}</Box>
      ))}
    </Flex>
  );
};

export default QuotesPage;

QuotesPage.propTypes = {};

QuotesPage.displayName = 'QuotesPage';
