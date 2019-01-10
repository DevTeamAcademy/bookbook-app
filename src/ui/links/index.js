import { or } from 'ramda';
import styled from 'styled-components';
import {
  color,
  space,
  width,
  height,
  border,
  zIndex,
  opacity,
  display,
  position,
  fontSize,
  boxShadow,
  alignItems,
  borderColor,
  borderRadius,
  justifyContent,
} from 'styled-system';
// //////////////////////////////////////////////////////////////////////////////

export const Link = styled.a`
  ${color}
  ${space}
  ${width}
  ${height}
  ${border}
  ${zIndex}
  ${opacity}
  ${display}
  ${fontSize}
  ${position}
  ${boxShadow}
  ${alignItems}
  ${borderColor}
  ${borderRadius}
  ${justifyContent}
  cursor: ${({ cursor }) => or(cursor, 'initial')};
`;
