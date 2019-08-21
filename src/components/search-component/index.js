import R from 'ramda';
import React, { useState, useEffect } from 'react';
// helpers
import * as H from '../../helpers';
// hooks
import { useDebounce } from '../../hooks';
// icons
import * as I from '../../icons';
// theme
import Theme from '../../theme';
// ui
import { Box, Flex, Input } from '../../ui';
////////////////////////////////////////////////////////////////////////////////

export const SearchComponent = props => {
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue, 500);
  const clearIcon = () => (
    <I.IconWrapper transform='rotate(45deg)'>
      <I.Add width={20} height={20} color={Theme.colors.white} />
    </I.IconWrapper>
  );
  const searchIcon = () => (
    <I.IconWrapper>
      <I.Search width={20} height={20} color={Theme.colors.lightBlue} />
    </I.IconWrapper>
  );
  const [icon, setIcon] = useState(searchIcon);
  useEffect(() => {
    if (debouncedSearchValue) {
      setLoading(true);
      // TODO: with searched action
      setTimeout(() => {
        setLoading(false);
        setIcon(clearIcon);
      }, 500);
    }
  }, [debouncedSearchValue]);
  const handleChange = event => {
    setIcon(searchIcon);
    setSearchValue(event.target.value);
  };
  const handleCleanSearchInput = () => {
    if (H.isNilOrEmpty(searchValue)) return null;
    setSearchValue('');
    setIcon(searchIcon);
  };
  return (
    <Flex
      width='100%'
      p='10px 15px'
      maxWidth='300px'
      border='1px solid'
      borderRadius='20px'
      height='max-content'
      justifyContent='space-between'
      borderColor={Theme.colors.middleGrey}
    >
      <Input
        type='text'
        height='20px'
        bg='transparent'
        value={searchValue}
        focusBoxShadow='none'
        onChange={handleChange}
        width='calc(100% - 40px)'
        color={Theme.colors.lightBlue}
        placeholderColor={Theme.colors.middleGrey}
        placeholder={H.getLocale('fields.search')}
      />
      {H.isFalse(loading) && (
        <Box height='20px' onClick={handleCleanSearchInput}>
          {icon}
        </Box>
      )}
      {/* TODO: change on gif or box with animation */}
      {H.isTrue(loading) && (
        <Box height='20px' color='white'>
          Loading...
        </Box>
      )}
    </Flex>
  );
};

export default SearchComponent;
