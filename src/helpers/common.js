import qs from 'qs';
import R from 'ramda';
import titleCase from 'voca/title_case';
import upperCase from 'voca/upper_case';
import lowerCase from 'voca/lower_case';
import { ToastsStore } from 'react-toasts';
// constants
import * as C from '../constants';
// helpers
import * as H from './';
// locale
import locales from '../locale';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export const qsStringify = data => qs.stringify(data);

export const showToast = (type, message, withoutLocale, timer) => {
  if (withoutLocale) return ToastsStore[type](message, R.or(timer, 3000));
  ToastsStore[type](getLocale(message), R.or(timer, 3000));
};

export const getLocaleName = () => {
  const localeString = H.ifElse(
    H.isNotNilAndNotEmpty(H.getItemFromLocalStorage('localeName')),
    H.getItemFromLocalStorage('localeName'),
    C.LOCALE_NAME_UA,
  );
  if (R.contains(localeString, R.keys(locales))) {
    return localeString;
  }
  return C.LOCALE_NAME_UA;
};

// TODO: add more caseActions if needed
export const getLocale = (localePath, options) => {
  if (R.isNil(localePath)) return '';
  const caseActionMap = {
    titleCase,
    upperCase,
    lowerCase,
  };
  const locale = R.prop(H.getLocaleName(), locales);
  const text = R.pathOr(' ', R.split('.', localePath), locale);
  if (H.isObject(options)) {
    const { caseAction } = options;
    const caseActionFn = caseActionMap[caseAction];
    if (R.and(caseAction, H.isFunction(caseActionFn))) return caseActionFn(text);
  }
  return text;
};
