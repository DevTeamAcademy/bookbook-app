import { not } from 'ramda';
import { useState, useEffect } from 'react';
// helpers
import * as H from '../helpers';
// /////////////////////////////////////////////////////////////////////////////////////////////////

// TODO: write test

export const useWindowSize = props => {
  const isClient = typeof window === 'object';
  const getSize = () => ({
    width: H.ifElse(isClient, window.innerWidth, undefined),
    height: H.ifElse(isClient, window.innerHeight, undefined),
  });
  const [windowSize, setWindowSize] = useState(getSize);
  useEffect(() => {
    if (not(isClient)) {
      return false;
    }
    const handleResize = () => setWindowSize(getSize());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
};
