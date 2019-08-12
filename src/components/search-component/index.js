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
  const [iconColor, setIconColor] = useState(Theme.colors.white);
  useEffect(() => {
    if (debouncedSearchValue) {
      setLoading(true);
      // TODO: with searched action
      setTimeout(() => {
        setLoading(false);
        setIconColor(Theme.colors.white);
      }, 500);
    }
  }, [debouncedSearchValue]);
  const handleChange = event => {
    setSearchValue(event.target.value);
    setIconColor(Theme.colors.lightBlue);
  };
  return (
    <Flex
      width='100%'
      p='10px 15px'
      maxWidth='300px'
      border='1px solid'
      borderRadius='20px'
      justifyContent='space-between'
      borderColor={Theme.colors.middleGrey}
    >
      <Input
        type='text'
        color='white'
        height='20px'
        bg='transparent'
        focusBoxShadow='none'
        value={searchValue}
        onChange={handleChange}
        width='calc(100% - 40px)'
        placeholderColor={Theme.colors.middleGrey}
        placeholder={H.getLocale('fields.search')}
      />
      {H.isFalse(loading) && (
        <Box height='20px'>
          <I.IconWrapper>
            <I.Search width={20} height={20} color={iconColor} />
          </I.IconWrapper>
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
