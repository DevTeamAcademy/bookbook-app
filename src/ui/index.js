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
export { Flex } from './flex';
export { Text } from './text';
export { Button } from './button';
export { Input } from './forms/input';
export { Label } from './forms/label';
export { Box } from './box';
export { PageWrapper, PositionedBox, AuthPagesWrapper, AnimatedPositionBox } from './wrappers';
// //////////////////////////////////////////////////////////////////////////////

export const createMinWithMediaQuery = n => `
  @media screen and (min-width: ${n}px)
`;

export const createMaxWithMediaQuery = n => `
  @media screen and (max-width: ${n}px)
`;
