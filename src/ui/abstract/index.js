import R from 'ramda';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  top,
  left,
  flex,
  size,
  color,
  space,
  width,
  right,
  height,
  bottom,
  border,
  opacity,
  display,
  position,
  maxWidth,
  minWidth,
  fontSize,
  textAlign,
  maxHeight,
  minHeight,
  boxShadow,
  borderTop,
  fontWeight,
  lineHeight,
  borderLeft,
  borderColor,
  borderRight,
  borderBottom,
  borderRadius,
} from 'styled-system';
// //////////////////////////////////////////////////////////////////////////////

export const Abstract = tag => styled(R.or(tag, 'div'))`
  ${top}
  ${left}
  ${flex}
  ${size}
  ${color}
  ${space}
  ${width}
  ${right}
  ${height}
  ${bottom}
  ${border}
  ${opacity}
  ${display}
  ${fontSize}
  ${position}
  ${maxWidth}
  ${minWidth}
  ${textAlign}
  ${maxHeight}
  ${minHeight}
  ${boxShadow}
  ${borderTop}
  ${fontWeight}
  ${lineHeight}
  ${borderLeft}
  ${borderRight}
  ${borderColor}
  ${borderBottom}
  ${borderRadius}
  cursor: ${({ cursor }) => cursor}};
`;

export const AbstractPropTypes = {
  cursor: PropTypes.string,
};
