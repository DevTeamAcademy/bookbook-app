import React from 'react';
import { pathOr } from 'ramda';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { isEmpty, isLoaded, useFirestoreConnect } from 'react-redux-firebase';
// ui
import { Box, Flex } from '../../ui';
// //////////////////////////////////////////////////

export const LibraryPage = props => {
  useFirestoreConnect('libraries');
  // useFirestoreConnect('libraries/GDnIVO1DUov41lB7xNHc/shelves');

  const libraries = useSelector(state => pathOr([], ['firestore', 'ordered', 'libraries'], state));

  if (!isLoaded(libraries)) {
    return <div>Loading...</div>;
  }

  if (isEmpty(libraries)) {
    return <div>Libraries List Is Empty</div>;
  }

  return <Flex>library page here</Flex>;
};

export default LibraryPage;

LibraryPage.propTypes = {};

LibraryPage.displayName = 'LibraryPage';
