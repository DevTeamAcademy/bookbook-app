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
  maxHeight,
  minHeight,
  boxShadow,
  borderTop,
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
  ${position}
  ${maxWidth}
  ${minWidth}
  ${maxHeight}
  ${minHeight}
  ${boxShadow}
  ${borderTop}
  ${borderLeft}
  ${borderRight}
  ${borderColor}
  ${borderBottom}
  ${borderRadius}
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
};

Box.displayName = 'Box';
