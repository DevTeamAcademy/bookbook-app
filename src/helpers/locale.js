import R from 'ramda';
import titleCase from 'voca/title_case';
import upperCase from 'voca/upper_case';
import lowerCase from 'voca/lower_case';
// constants
import * as C from '../constants';
// helpers
import * as H from './';
// locale
import locales from '../locale';
// //////////////////////////////////////////////////

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

// TODO: check why min-max getLocale not working
export const getValidationMaxLocale = max => `${getLocale('titles:maximum')} ${max}`;
export const getValidationMinLocale = min => `${getLocale('titles:minimum')} ${min}`;

export const getRequiredLocale = () => getLocale('validations.fieldIsRequired');

export const getFieldIsNotValidLocale = () => getLocale('validations.fieldIsNotValid');

export const getShouldBeNumericLocale = () => getLocale('validations.shouldBeNumeric');

export const getShouldBeIntegerLocale = () => getLocale('validations.shouldBeInteger');

export const getShouldBePositiveLocale = () => getLocale('validations.shouldBePositive');

export const getShouldBeEmailLocale = () => getLocale('validations.shouldBeEmail');

export const getShouldBeUrlLocale = () => getLocale('validations.shouldBeUrl');
