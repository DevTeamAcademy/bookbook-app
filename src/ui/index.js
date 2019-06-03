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
export { Box } from './box';
export { Flex } from './flex';
export { Text } from './text';
export { Input } from './forms/input';
export { Label } from './forms/label';
// //////////////////////////////////////////////////////////////////////////////

export const createMinWithMediaQuery = n => `
  @media screen and (min-width: ${n}px)
`;

export const createMaxWithMediaQuery = n => `
  @media screen and (max-width: ${n}px)
`;

export const Button = styled.button`
  ${color}
  ${space}
  ${width}
  ${height}
  ${border}
  ${zIndex}
  ${opacity}
  ${fontSize}
  ${boxShadow}
  ${borderColor}
  ${borderRadius}
  cursor: ${({ cursor }) => or(cursor, 'initial')};
`;

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

/* NOTE: don't remove 'position' from start for work animation */
export const LinkAnimated = styled(Link)`
  position: relative;
  &::before {
    top: 0;
    left: 0;
    width: 0;
    content: '';
    height: 100%;
    position: absolute;
    transition: width 0.2s;
    background-color: rgba(255, 255, 255, 0.5);
  }
  &:hover {
    &::before {
      width: 100%;
    }
  }
`;
