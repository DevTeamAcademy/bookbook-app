import { pathOr } from 'ramda';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export const getLocale = (localePath, defaultValue = 'no locale', locale = {}) =>
  pathOr(defaultValue, localePath, locale);
