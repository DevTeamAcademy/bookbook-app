import { or, is, and, all, isNil, equals, isEmpty, complement } from 'ramda';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const isArray = is(Array);
export const isString = is(String);
export const isNumber = is(Number);
export const isObject = is(Object);
export const isBoolean = is(Boolean);
export const isFunction = is(Function);
export const isTrue = equals(true);
export const isFalse = equals(false);
export const isNotNil = complement(isNil);
export const notEquals = complement(equals);
export const isNotEmpty = complement(isEmpty);
export const isAllTrue = (...args) => all(isTrue, args);
export const isAllFalse = (...args) => all(isFalse, args);
export const isNilOrEmpty = value => or(isNil(value), isEmpty(value));
export const isNotNilAndNotEmpty = value => and(isNotNil(value), isNotEmpty(value));
