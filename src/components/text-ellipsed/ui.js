import R from 'ramda';
import styled from 'styled-components';
import {
  color,
  space,
  width,
  border,
  display,
  fontSize,
  maxWidth,
  minWidth,
  maxHeight,
  minHeight,
  textAlign,
  boxShadow,
  fontWeight,
  borderLeft,
  borderColor,
  borderRight,
  borderBottom,
  borderRadius,
} from 'styled-system';
// global
import * as H from '../../helpers';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export const Text = styled.div`
  ${space}
  ${width}
  ${color}
  ${border}
  ${display}
  ${fontSize}
  ${maxWidth}
  ${minWidth}
  ${maxHeight}
  ${minHeight}
  ${textAlign}
  ${boxShadow}
  ${fontWeight}
  ${borderLeft}
  ${borderColor}
  ${borderRight}
  ${borderBottom}
  ${borderRadius}

  cursor: ${({ cursor }: Object) => R.or(cursor, 'initial')};
  overflow: ${({ overflow }: Object) => R.or(overflow, 'hidden')};
  word-break: ${({ wordBreak }: Object) => R.or(wordBreak, 'unset')};
  white-space: ${({ whiteSpace }: Object) => R.or(whiteSpace, 'nowrap')};
  text-transform: ${({ textTransform }: Object) => R.or(textTransform, 'unset')};
  text-overflow: ${({ withEllipsis }: Object) => H.ifElse(H.isTrue(withEllipsis), 'ellipsis', 'clip')}
`;
