import React from 'react';
import { render, fireEvent } from 'react-testing-library';
// components
import HeaderNav from './';
// constants
import * as C from '../../constants';
////////////////////////////////////////////////////////////////////////////////////////////////////

it('HeaderNav should render', () => {
  const { getByTestId } = render(<HeaderNav handleClickNavItem={jest.fn()} />);
  expect(getByTestId(C.TEST_ID_HEADER_NAV)).toBeInTheDocument();
});

// TODO: check why this test fail
it('HeaderNav should handle click nav item', () => {
  const mockFunction = jest.fn();
  const { getByTestId } = render(<HeaderNav handleClickNavItem={mockFunction} />);
  fireEvent.click(getByTestId(C.TEST_ID_HEADER_NAV_ITEM));
  expect(mockFunction).toHaveBeenCalled();
});
