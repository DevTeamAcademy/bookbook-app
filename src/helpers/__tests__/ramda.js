import {
  isTrue,
  isFalse,
  isNotNil,
  notEquals,
  isAllTrue,
  isAllFalse,
  isNotEmpty,
  isNilOrEmpty,
  isNotNilAndNotEmpty,
} from '../';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

it('isTrue should check is arg true', () => {
  expect(isTrue(true)).toEqual(true);
  expect(isTrue(false)).toEqual(false);
  expect(isTrue(() => false)).toEqual(false);
  expect(isTrue(5)).toEqual(false);
  expect(isTrue('string')).toEqual(false);
  expect(isTrue({})).toEqual(false);
  expect(isTrue([])).toEqual(false);
  expect(isTrue(null)).toEqual(false);
  expect(isTrue(undefined)).toEqual(false);
});

it('isFalse should check is arg false', () => {
  expect(isFalse(false)).toEqual(true);
  expect(isFalse(true)).toEqual(false);
  expect(isFalse(() => false)).toEqual(false);
  expect(isFalse(5)).toEqual(false);
  expect(isFalse('string')).toEqual(false);
  expect(isFalse({})).toEqual(false);
  expect(isFalse([])).toEqual(false);
  expect(isFalse(null)).toEqual(false);
  expect(isFalse(undefined)).toEqual(false);
});

it('isNotNil should check is arg not nil (not null or not undefined)', () => {
  expect(isNotNil(null)).toEqual(false);
  expect(isNotNil(undefined)).toEqual(false);
  expect(isNotNil(true)).toEqual(true);
  expect(isNotNil(0)).toEqual(true);
  expect(isNotNil('')).toEqual(true);
  expect(isNotNil({})).toEqual(true);
  expect(isNotNil([])).toEqual(true);
});

it('notEquals should check is args not equals', () => {
  expect(notEquals(false, false)).toEqual(false);
  expect(notEquals(false, true)).toEqual(true);
  expect(notEquals(1, 2)).toEqual(true);
  expect(notEquals(1, 1)).toEqual(false);
  expect(notEquals('first', 'second')).toEqual(true);
  expect(notEquals('first', 'first')).toEqual(false);
});

it('isAllTrue should check is all args true', () => {
  expect(isAllTrue(true, true, true)).toEqual(true);
  expect(isAllTrue(true, true, false)).toEqual(false);
  expect(isAllTrue(true, true, 1)).toEqual(false);
});

it('isAllFalse should check is all args false', () => {
  expect(isAllFalse(false, false, false)).toEqual(true);
  expect(isAllFalse(true, false, false)).toEqual(false);
  expect(isAllFalse(true, true, '')).toEqual(false);
});

it('isNotEmpty should check is arg not empty', () => {
  expect(isNotEmpty('')).toEqual(false);
  expect(isNotEmpty({})).toEqual(false);
  expect(isNotEmpty([])).toEqual(false);
  expect(isNotEmpty('string')).toEqual(true);
  expect(isNotEmpty({ test: 'Test' })).toEqual(true);
  expect(isNotEmpty([1])).toEqual(true);
});

it('isNilOrEmpty should check is arg nil or empty', () => {
  expect(isNilOrEmpty(null)).toEqual(true);
  expect(isNilOrEmpty(undefined)).toEqual(true);
  expect(isNilOrEmpty(true)).toEqual(false);
  expect(isNilOrEmpty(0)).toEqual(false);
  expect(isNilOrEmpty('')).toEqual(true);
  expect(isNilOrEmpty({})).toEqual(true);
  expect(isNilOrEmpty([])).toEqual(true);
  expect(isNilOrEmpty('string')).toEqual(false);
  expect(isNilOrEmpty({ test: 'Test' })).toEqual(false);
  expect(isNilOrEmpty([1])).toEqual(false);
});

it('isNotNilAndNotEmpty should check is arg not nil and not empty', () => {
  expect(isNotNilAndNotEmpty(null)).toEqual(false);
  expect(isNotNilAndNotEmpty(undefined)).toEqual(false);
  expect(isNotNilAndNotEmpty(true)).toEqual(true);
  expect(isNotNilAndNotEmpty(0)).toEqual(true);
  expect(isNotNilAndNotEmpty('')).toEqual(false);
  expect(isNotNilAndNotEmpty({})).toEqual(false);
  expect(isNotNilAndNotEmpty([])).toEqual(false);
  expect(isNotNilAndNotEmpty('string')).toEqual(true);
  expect(isNotNilAndNotEmpty({ test: 'Test' })).toEqual(true);
  expect(isNotNilAndNotEmpty([1])).toEqual(true);
});
