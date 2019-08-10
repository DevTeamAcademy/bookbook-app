import { useState, useEffect } from 'react';
///////////////////////////////////////////////////////////////////////////

export const useDebounce = (searchedValue, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(searchedValue);
  useEffect(() => {
    const handleSetDebounce = setTimeout(() => {
      setDebouncedValue(searchedValue);
    }, delay);
    return () => {
      clearTimeout(handleSetDebounce);
    };
  }, [searchedValue, delay]);
  return debouncedValue;
};
