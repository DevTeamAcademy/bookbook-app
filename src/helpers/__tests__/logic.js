import { T, F } from 'ramda';
import { ifElse } from '../';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

it('ifElse should do if else condition logic', () => {
  expect(ifElse(true, 1, 2)).toEqual(1);
  expect(ifElse(false, 1, 2)).toEqual(2);
  expect(ifElse(T(), 'first', 'second')).toEqual('first');
  expect(ifElse(F(), 'first', 'second')).toEqual('second');
});
