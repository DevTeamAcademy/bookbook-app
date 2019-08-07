export { Box } from './box';
export { Flex } from './flex';
export { Text } from './text';
export { Button } from './button';
export { Input } from './forms/input';
export { Label } from './forms/label';
export { PageWrapper, AbsoluteWrapper, AuthPagesWrapper } from './wrappers';
// //////////////////////////////////////////////////////////////////////////////

export const createMinWithMediaQuery = n => `
  @media screen and (min-width: ${n}px)
`;

export const createMaxWithMediaQuery = n => `
  @media screen and (max-width: ${n}px)
`;
