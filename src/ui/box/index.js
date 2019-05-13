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

export const Box = styled.div`
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

Box.propTypes = {
  ...top.propTypes,
  ...left.propTypes,
  ...size.propTypes,
  ...color.propTypes,
  ...space.propTypes,
  ...width.propTypes,
  ...right.propTypes,
  ...height.propTypes,
  ...bottom.propTypes,
  ...border.propTypes,
  ...opacity.propTypes,
  ...display.propTypes,
  ...position.propTypes,
  ...maxWidth.propTypes,
  ...minWidth.propTypes,
  ...maxHeight.propTypes,
  ...minHeight.propTypes,
  ...boxShadow.propTypes,
  ...borderTop.propTypes,
  ...borderLeft.propTypes,
  ...borderColor.propTypes,
  ...borderRight.propTypes,
  ...borderBottom.propTypes,
  ...borderRadius.propTypes,
  cursor: PropTypes.string,
};

Box.displayName = 'Box';

export const PositionedBox = styled(Box)`
  ${top}
  ${left}
  ${right}
  ${bottom}
  ${position}
`;

Box.propTypes = {
  ...top.propTypes,
  ...left.propTypes,
  ...right.propTypes,
  ...bottom.propTypes,
  ...position.propTypes,
};

PositionedBox.displayName = 'PositionedBox';
