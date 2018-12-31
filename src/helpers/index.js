import {
  or,
  and,
  all,
  isNil,
  equals,
  pathOr,
  isEmpty,
  complement } from 'ramda';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

// ADDITION RAMDA HELPERS
export const isTrue = (value) => equals(value, true);
export const isFalse = (value) => equals(value, false);
export const isNotNil = complement(isNil);
export const notEquals = complement(equals);
export const isNotEmpty = complement(isEmpty);
export const isNotNilAndNotEmpty = (value) => and(isNotNil(value), isNotEmpty(value));
export const isNilOrEmpty = (value) => or(isNil(value), isEmpty(value));
export const isAllTrue = (...args) => all(isTrue, args);
export const isAllFalse = (...args) => all(isFalse, args);

export const getItemFromLocalStorage = (itemName) => localStorage.getItem(itemName);
export const setItemToLocalStorage = (itemName, itemValue) => localStorage.setItem(itemName, itemValue);

export const ifElse = (predicate, ifSt, elseSt) => {
  if (predicate) return ifSt;
  return elseSt;
};

export const getLocaleItem = (path, locale) => pathOr('', path, locale);
