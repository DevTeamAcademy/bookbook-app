import React from 'react';
import PropTypes from 'prop-types';
// components
import { Multiswitch, SearchComponent } from '../../../components';
// ui
import { Box, Flex, PageWrapper } from '../../../ui';
// feature search
import BookerComponent from '../components/booker';
import { searchSwitchFields, muiltiSwitchSettings } from '../settings/field-settings';
///////////////////////////////////////////////////////////////////////////

export const SearchPage = () => (
  <PageWrapper>
    <Flex px='20px' width='100%' m='20px auto' maxWidth='500px' alignItems='center' flexDirection='column'>
      <SearchComponent />
      <Multiswitch options={searchSwitchFields} settings={muiltiSwitchSettings} />
      <BookerComponent
        nickName='Cathern Goldblatt'
        descriptions={['Chief Innovation Officer at Sourcebits', 'Pepperdine University']}
      />
    </Flex>
  </PageWrapper>
);

export default SearchPage;

SearchPage.propTypes = {};

SearchPage.displayName = 'SearchPage';
