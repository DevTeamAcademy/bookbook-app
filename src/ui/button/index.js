import styled from 'styled-components';
import {
  color,
  space,
  width,
  height,
  border,
  zIndex,
  opacity,
  fontSize,
  maxWidth,
  boxShadow,
  borderColor,
  borderRadius,
} from 'styled-system';
// //////////////////////////////////////////////////////////////////////////////

export const Button = styled.button`
  ${color}
  ${space}
  ${width}
  ${height}
  ${border}
  ${zIndex}
  ${opacity}
  ${maxWidth}
  ${fontSize}
  ${boxShadow}
  ${borderColor}
  ${borderRadius}
  cursor: ${({ cursor }) => cursor};
`;
