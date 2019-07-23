import R from 'ramda';
import React, { useState, createContext } from 'react';
// constants
import * as C from '../constants';
// helpers
import * as H from '../helpers';
// locale
import locales from '../locale';
// /////////////////////////////////////////////////////////////////////////////////////////////////

const getLocaleName = () =>
  H.ifElse(
    H.isNotNilAndNotEmpty(H.getItemFromLocalStorage('localeName')),
    H.getItemFromLocalStorage('localeName'),
    C.LOCALE_NAME_UA,
  );

export const LocaleContext = createContext();

// TODO: check all logic and change locale helper
export const LocaleProvider = props => {
  const [locale, setLocale] = useState(() => {
    const localeName = getLocaleName();
    window.locale = R.prop(localeName, locales);
    return R.prop(localeName, locales);
  });
  const changeLocale = localeName => {
    H.setItemToLocalStorage('localeName', localeName);
    window.locale = R.prop(localeName, locales);
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
