import { useState, useEffect } from 'react';
///////////////////////////////////////////////////////////////////////////

export const useDebounce = (searchValue, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(searchValue);
  useEffect(() => {
    const handleSetDebounce = setTimeout(() => {
      setDebouncedValue(searchValue);
    }, delay);
    return () => {
      clearTimeout(handleSetDebounce);
    };
  }, [searchValue, delay]);
  return debouncedValue;
};
