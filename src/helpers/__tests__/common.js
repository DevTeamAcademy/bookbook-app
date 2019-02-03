// helpers
import { getLocaleItem } from '../';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

const localeMock = {
  home: 'Home',
};

// TODO: check tests

it('getLocaleItem should return value from locale', () => {
  expect(getLocaleItem('home', null)).toEqual('...');
  expect(getLocaleItem('ho', localeMock)).toEqual('...');
  expect(getLocaleItem('home', null, 'Home Default')).toEqual('Home Default');
  expect(getLocaleItem('home', localeMock, 'Home Default')).toEqual('Home');
});
