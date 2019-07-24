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

export const getLocaleName = () =>
  H.ifElse(
    H.isNotNilAndNotEmpty(H.getItemFromLocalStorage('localeName')),
    H.getItemFromLocalStorage('localeName'),
    C.LOCALE_NAME_UA,
  );

// TODO: add more caseActions if needed
export const getLocale = (localePath: string, options) => {
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

export const showToast = (type, messageLocale, timer) => ToastsStore[type](getLocale(messageLocale), R.or(timer, 3000));

export const isResponseSuccess = ({ status }) => R.and(R.gte(status, 200), R.lt(status, 300));

export const hasNotResponseErrors = (res: Object) => {
  const { invalidFields, message, errors, error_description } = res;
  if (H.isNotNil(invalidFields)) {
    invalidFields.map((field: Object) => showToast('error', `${field.fieldName}: ${field.message}`));
    return false;
  } else if (H.isNotNil(message)) {
    if (H.isNotNilAndNotEmpty(errors)) {
      errors.map((error: Object) => showToast('error', error));
    } else {
      showToast('error', message);
    }
    return false;
  } else if (H.isNotNil(error_description)) {
    showToast('error', error_description);
    return false;
  }
  return true;
};
