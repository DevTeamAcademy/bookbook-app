import React from 'react';
import { render } from 'react-testing-library';
// components
import TextEllipsed from './';
// ////////////////////////////////////////////////////////////////////////////////////////////////////

it('TextEllipsed should render with text', () => {
  const { getByText } = render(<TextEllipsed>Text</TextEllipsed>);
  expect(getByText('Text')).toBeInTheDocument();
});

it('TextEllipsed should render ellipsed text with title', () => {
  const title = 'An ellipsed text here';
  const { getByTitle } = render(
    <TextEllipsed title={title} maxWidth={100} withEllipsis={true}>
      {title}
    </TextEllipsed>,
  );
  expect(getByTitle(title)).toHaveAttribute('title', title);
});

it('TextEllipsed should render children element', () => {
  const textEllipsedId = 'textEllipsedId';
  const textEllipsedChildrenId = 'textEllipsedChildrenId';
  const { getByTestId, queryByTestId } = render(
    <TextEllipsed data-testid={textEllipsedId}>
      <span data-testid={textEllipsedChildrenId}>Text</span>
    </TextEllipsed>,
  );
  const ancestor = queryByTestId(textEllipsedId);
  const descendant = queryByTestId(textEllipsedChildrenId);
  const nonExistentElement = queryByTestId('does-not-exist');
  expect(getByTestId(textEllipsedId)).toBeInTheDocument();
  expect(ancestor).toContainElement(descendant);
  expect(descendant).not.toContainElement(ancestor);
  expect(ancestor).not.toContainElement(nonExistentElement);
});
