import R from 'ramda';
import titleCase from 'voca/title_case';
import upperCase from 'voca/upper_case';
import lowerCase from 'voca/lower_case';
// helpers
import { isObject, isFunction } from './ramda';
// /////////////////////////////////////////////////////////////////////////////////////////////////

// TODO: add more caseActions if needed
export const getLocale = (localePath: string, locale = {}, options) => {
  const caseActionMap = {
    titleCase,
    upperCase,
    lowerCase,
  };
  const text = R.pathOr(' ', localePath, locale);
  if (isObject(options)) {
    const { caseAction } = options;
    const caseActionFn = caseActionMap[caseAction];
    if (R.and(caseAction, isFunction(caseActionFn))) return caseActionFn(text);
  }
  return text;
};
