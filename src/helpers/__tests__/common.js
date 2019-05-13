// helpers
import { getLocale } from '../';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

const localeMock = {
  home: 'Home',
};

it('getLocaleItem should return value from locale', () => {
  expect(getLocale(['home'])).toEqual('...');
  expect(getLocale(['ho'], 'ho', localeMock)).toEqual('ho');
  expect(getLocale(['home'], 'Home Default', null)).toEqual('Home Default');
  expect(getLocale(['home'], 'Home Default', {})).toEqual('Home Default');
  expect(getLocale(['home'], 'Home Default', localeMock)).toEqual('Home');
});
