import React from 'react';
// components
import { Multiswitch, SearchComponent } from '../../../components';
// ui
import { Box, PageWrapper } from '../../../ui';
// feature search
import BookerComponent from '../components/booker';
import { searchSwitchFields, muiltiSwitchSettings } from '../settings/field-settings';
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const users = [
  {
    firstName: 'Cathern',
    lastName: 'Goldblatt',
    descriptions: ['Chief Innovation Officer at Sourcebits', 'Pepperdine University'],
  },
];

export const SearchPage = () => (
  <PageWrapper>
    <Box px='20px' width='100%' m='20px auto' maxWidth='500px'>
      <SearchComponent />
      <Multiswitch options={searchSwitchFields} settings={muiltiSwitchSettings} />
      {users.map((booker, index) => (
        <BookerComponent
          key={index}
          lastName={booker.lastName}
          firstName={booker.firstName}
          descriptions={booker.descriptions}
          handleGoToBookerProfile={() => console.log('hello world')}
        />
      ))}
    </Box>
  </PageWrapper>
);

export default SearchPage;

SearchPage.displayName = 'SearchPage';
