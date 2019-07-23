import R from 'ramda';
import titleCase from 'voca/title_case';
import upperCase from 'voca/upper_case';
import lowerCase from 'voca/lower_case';
import { ToastsStore } from 'react-toasts';
// helpers
import { isNotNil, isObject, isFunction, isNotNilAndNotEmpty } from './ramda';
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

export const showToast = (type, message, timer) => ToastsStore[type](message, R.or(timer, 3000));

export const isResponseSuccess = ({ status }) => R.and(R.gte(status, 200), R.lt(status, 300));

export const hasNotResponseErrors = (res: Object) => {
  const { invalidFields, message, errors, error_description } = res;
  if (isNotNil(invalidFields)) {
    invalidFields.map((field: Object) => showToast('error', `${field.fieldName}: ${field.message}`));
    return false;
  } else if (isNotNil(message)) {
    if (isNotNilAndNotEmpty(errors)) {
      errors.map((error: Object) => showToast('error', error));
    } else {
      showToast('error', message);
    }
    return false;
  } else if (isNotNil(error_description)) {
    showToast('error', error_description);
    return false;
  }
  return true;
};
