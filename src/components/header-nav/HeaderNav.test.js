import React from 'react';
import { withRouter } from 'react-router';
import { fireEvent } from 'react-testing-library';
// root
import { renderWithRouter } from '../../App.test.js';
// components
import HeaderNav from './';
// constants
import * as C from '../../constants';
////////////////////////////////////////////////////////////////////////////////////////////////////

const HeaderWithRouter = withRouter(HeaderNav);

it('HeaderNav should render', () => {
  const { getByTestId } = renderWithRouter(
    <HeaderWithRouter handleToggleMenu={jest.fn()} handleClickNavItem={jest.fn()} />,
    { route: C.ROUTE_HOME_PAGE },
  );
  expect(getByTestId(C.TEST_ID_HEADER_NAV)).toBeInTheDocument();
});

it('HeaderNav should render nav items', () => {
  const { queryAllByTestId } = renderWithRouter(
    <HeaderWithRouter handleToggleMenu={jest.fn()} handleClickNavItem={jest.fn()} />,
    { route: C.ROUTE_HOME_PAGE },
  );
  expect(queryAllByTestId(C.TEST_ID_HEADER_NAV_ITEM)).toHaveLength(6);
});

it('HeaderNav should handle click nav item', () => {
  const mockHandleClickNavItem = jest.fn();
  const { getByTestId } = renderWithRouter(
    <HeaderWithRouter handleToggleMenu={mockHandleClickNavItem} handleClickNavItem={mockHandleClickNavItem} />,
    { route: C.ROUTE_HOME_PAGE },
  );
  fireEvent.click(getByTestId(C.TEST_ID_HEADER_NAV_ITEM));
  expect(mockHandleClickNavItem).toHaveBeenCalled();
});
