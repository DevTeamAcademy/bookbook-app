import R from 'ramda';
import styled from 'styled-components';
import { width, space, color, fontSize } from 'styled-system';
// global
import * as H from '../../helpers';
// /////////////////////////////////////////////////////////////////////////////////////////////////

// REFACTOR: with new styled-system or ui

export const Text = styled.div`
  ${space} ${width} ${color} ${fontSize};

  border: ${({ border }: Object) => R.or(border, 'none')};
  cursor: ${({ cursor }: Object) => R.or(cursor, 'unset')};
  display: ${({ display }: Object) => R.or(display, 'inline')};
  overflow: ${({ overflow }: Object) => R.or(overflow, 'hidden')};
  max-width: ${({ maxWidth }: Object) => R.or(maxWidth, 'unset')};
  min-width: ${({ minWidth }: Object) => R.or(minWidth, 'unset')};
  word-break: ${({ wordBreak }: Object) => R.or(wordBreak, 'unset')};
  font-weight: ${({ fontWeight }: Object) => R.or(fontWeight, 'unset')};
  white-space: ${({ whiteSpace }: Object) => R.or(whiteSpace, 'nowrap')};
  border-radius: ${({ borderRadius }: Object) => R.or(borderRadius, 'none')};
  text-transform: ${({ textTransform }: Object) => R.or(textTransform, 'unset')};
  text-overflow: ${({ withEllipsis }: Object) => H.ifElse(
    H.isTrue(withEllipsis),
    'ellipsis',
    'clip',
  )}
`;
