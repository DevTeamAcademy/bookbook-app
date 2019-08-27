import React from 'react';
import PropTypes from 'prop-types';
// components
import { Multiswitch, Se } from '../../../components';
// ui
import { Flex, PageWrapper } from '../../../ui';
///////////////////////////////////////////////////////////////////////////

export const SearchPage = () => (
  <PageWrapper>
    <Multiswitch options={[]} />
  </PageWrapper>
);

export default SearchPage;

SearchPage.propTypes = {};

SearchPage.displayName = 'SearchPage';
