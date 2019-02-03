import { pathOr } from 'ramda';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export const getLocaleItem = (localeKey, locale, defaultValue = '...') => pathOr(defaultValue, [localeKey], locale);
