import React, { useState, useEffect } from 'react';
// icons
import * as I from '../../icons';
// ui
import { Flex, Input } from '../../ui';
////////////////////////////////////////////////////////////////////////////////

const useDebounce = (searchedValue, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(searchedValue);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(searchedValue);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [searchedValue]);
  return debouncedValue;
};

export const SearchComponent = props => {
  const searchIcon = <I.Search width={20} height={20} color='#6fa6d6' />;
  const clearIcon = <I.Settings width={20} height={20} color='#6fa6d6' />;
  const [isSearching, setIsSearching] = useState(false);
  const [searchedValue, setSearchedValue] = useState('');
  const debouncedSearchTerm = useDebounce(searchedValue, 0);
  const [searchedIcon, setSearchedIcon] = useState(searchIcon);
  useEffect(() => {
    setIsSearching(true);
    // todo: with searched function
    setTimeout(() => setIsSearching(false), 500);
  }, [debouncedSearchTerm]);
  const handleChange = event => {
    setSearchedIcon(clearIcon);
    setSearchedValue(event.target.value);
  };
  return (
    <Flex
      p='10px 15px'
      ml='200px'
      width='375px'
      borderRadius='20px'
      border='1px solid #9d8c70'
      justifyContent='space-between'
    >
      <Input
        type='text'
        color='white'
        height='20px'
        bg='transparent'
        focusBoxShadow='none'
        value={searchedValue}
        placeholder='Search...'
        onChange={handleChange}
        width='calc(100% - 40px)'
        placeholderColor='#9d8c70'
      />
      <I.IconWrapper height={20}>
        {searchedIcon}
        {console.log('searchedIcon', searchedIcon)}
      </I.IconWrapper>
      {isSearching && <div style={{ color: 'white' }}>Loading...</div>}
    </Flex>
  );
};

export default SearchComponent;
