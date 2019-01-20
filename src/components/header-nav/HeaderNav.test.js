import React from 'react';
import { render } from 'react-testing-library';
// components
import HeaderNav from './';
////////////////////////////////////////////////////////////////////////////////////////////////////

it('HeaderNav should render', () => {
  const headerTestId = 'headerTestId';
  const { getByTestId } = render(<HeaderNav data-testid={headerTestId} />);
  expect(getByTestId(headerTestId)).toBeInTheDocument();
});
