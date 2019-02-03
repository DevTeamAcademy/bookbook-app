import React, { useState, createContext } from 'react';
import { prop } from 'ramda';
// constants
import * as GC from '../constants';
import * as H from '../helpers';
// locale
import locales from '../locale';
// /////////////////////////////////////////////////////////////////////////////////////////////////

const getLocaleName = () =>
  H.ifElse(
    H.isNotNilAndNotEmpty(H.getItemFromLocalStorage('localeName')),
    H.getItemFromLocalStorage('localeName'),
    GC.LOCALE_NAME_UA,
  );

export const LocaleContext = createContext();

export const LocaleProvider = props => {
  const [locale, setLocale] = useState(() => {
    const localeName = getLocaleName();
    return prop(localeName, locales);
  });

  const changeLocale = localeName => {
    H.setItemToLocalStorage('localeName', localeName);
    setLocale(locales[localeName]);
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
