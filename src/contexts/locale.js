import R from 'ramda';
import React, { useState, createContext } from 'react';
// helpers
import * as H from '../helpers';
// locale
import locales from '../locale';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export const LocaleContext = createContext();

export const LocaleProvider = props => {
  const [locale, setLocale] = useState(() => {
    const localeName = H.getLocaleName();
    return R.prop(localeName, locales);
  });
  const changeLocale = localeName => {
    H.setItemToLocalStorage('localeName', localeName);
    setLocale(R.prop(localeName, locales));
  };
  return (
    <LocaleContext.Provider
      value={{
        locale,
        changeLocale,
      }}
    >
      {props.children}
    </LocaleContext.Provider>
  );
};
