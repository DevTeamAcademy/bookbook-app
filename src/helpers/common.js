import qs from 'qs';
import R from 'ramda';
import { ToastsStore } from 'react-toasts';
// helpers
import * as H from './';
// //////////////////////////////////////////////////

export const qsStringify = data => qs.stringify(data);

export const showToast = (type, message, withoutLocale, timer) => {
  const defaultTimer = 5000;
  const showTime = R.or(timer, defaultTimer);
  if (withoutLocale) return ToastsStore[type](message, showTime);
  ToastsStore[type](H.getLocale(message), showTime);
};
