import React from 'react';
import { pathOr } from 'ramda';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { isEmpty, isLoaded, useFirebaseConnect } from 'react-redux-firebase';
// ui
import { Box, Flex } from '../../ui';
// //////////////////////////////////////////////////

export const QuotesPage = props => {
  useFirebaseConnect('quotes');

  const quotes = useSelector(state => pathOr([], ['firebase', 'ordered', 'quotes'], state));

  if (!isLoaded(quotes)) {
    return <div>Loading...</div>;
  }

  if (isEmpty(quotes)) {
    return <div>Quotes List Is Empty</div>;
  }

  return (
    <Flex flexDirection='column'>
      {quotes.map(item => (
        <Box key={item.key}>{item.value.quote}</Box>
      ))}
    </Flex>
  );
};

export default QuotesPage;

QuotesPage.propTypes = {};

QuotesPage.displayName = 'QuotesPage';
