import React from 'react';
import * as R from 'ramda';
import { render, fireEvent } from 'react-testing-library';
// components
import Multiswitch from './';
// constants
import * as C from '../../constants';
////////////////////////////////////////////////////////////////////////////////////////////////////

const multiswitchOptions = [
  {
    width: 50,
    name: 'all',
    value: 'all',
  },
  {
    width: 50,
    name: 'Bookers',
    value: 'bookers',
  },
];

it('Multiswitch should render and has two child components', () => {
  const { container, getByTestId } = render(<Multiswitch selectedOptionIndex={0} options={multiswitchOptions} />);
  expect(container.childNodes.length).toEqual(1);
  const childNodes = container.firstChild.childNodes;
  expect(childNodes.length).toEqual(2);
  expect(getByTestId(C.TEST_ID_MULTISWITCH)).toBeInTheDocument();
});

it('Multiswitch should change values after click on radio', () => {
  const { container } = render(<Multiswitch selectedOptionIndex={0} options={multiswitchOptions} />);
  const childNodes = container.firstChild.childNodes;
  expect(childNodes[0].firstChild.checked).toEqual(true);
  expect(childNodes[1].firstChild.checked).toEqual(false);
  fireEvent.click(childNodes[1].firstChild);
  expect(childNodes[0].firstChild.checked).toEqual(false);
  expect(childNodes[1].firstChild.checked).toEqual(true);
});

it('Multiswitch should has no children if without options', () => {
  const { container } = render(<Multiswitch options={[]} selectedOptionIndex={0} />);
  expect(container.childNodes.length).toEqual(1);
  expect(container.firstChild.childNodes.length).toEqual(0);
});
