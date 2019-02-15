import { pathOr } from 'ramda';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export const getLocale = (localePath, defaultValue = '...', locale = {}) => pathOr(defaultValue, localePath, locale);
