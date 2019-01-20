import { or, and, all, isNil, equals, isEmpty, complement } from 'ramda';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const isTrue = equals(true);
export const isFalse = equals(false);
export const isNotNil = complement(isNil);
export const notEquals = complement(equals);
export const isNotEmpty = complement(isEmpty);
export const isNotNilAndNotEmpty = value => and(isNotNil(value), isNotEmpty(value));
export const isNilOrEmpty = value => or(isNil(value), isEmpty(value));
export const isAllTrue = (...args) => all(isTrue, args);
export const isAllFalse = (...args) => all(isFalse, args);
