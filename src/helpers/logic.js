import { not } from 'ramda';
// TODO: check is predicate boolean
export const ifElse = (predicate, ifSt, elseSt) => {
  if (predicate) return ifSt;
  return elseSt;
};

export const isInteger = value => Number.isInteger(value);
export const isNotInteger = value => not(isInteger(value));
