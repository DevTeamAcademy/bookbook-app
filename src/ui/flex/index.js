import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  size,
  color,
  space,
  width,
  height,
  border,
  opacity,
  position,
  flexWrap,
  maxWidth,
  minWidth,
  maxHeight,
  minHeight,
  boxShadow,
  borderTop,
  alignItems,
  borderLeft,
  borderColor,
  borderRight,
  borderBottom,
  borderRadius,
  flexDirection,
  justifyContent,
} from 'styled-system';
// helpers
import * as H from '../../helpers';
// //////////////////////////////////////////////////////////////////////////////

export const Flex = styled.div`
  ${size}
  ${color}
  ${space}
  ${width}
  ${height}
  ${border}
  ${opacity}
  ${flexWrap}
  ${position}
  ${maxWidth}
  ${minWidth}
  ${maxHeight}
  ${minHeight}
  ${boxShadow}
  ${borderTop}
  ${borderLeft}
  ${alignItems}
  ${borderColor}
  ${borderRight}
  ${borderBottom}
  ${borderRadius}
  ${flexDirection}
  ${justifyContent}
  display: ${({ inline }) => H.ifElse(inline, 'inline-flex', 'flex')};
`;

Flex.propTypes = {
  ...size.propTypes,
  ...color.propTypes,
  ...space.propTypes,
  ...width.propTypes,
  ...height.propTypes,
  ...border.propTypes,
  ...opacity.propTypes,
  ...flexWrap.propTypes,
  ...position.propTypes,
  ...maxWidth.propTypes,
  ...minWidth.propTypes,
  ...maxHeight.propTypes,
  ...minHeight.propTypes,
  ...boxShadow.propTypes,
  ...borderTop.propTypes,
  ...borderLeft.propTypes,
  ...alignItems.propTypes,
  ...borderColor.propTypes,
  ...borderRight.propTypes,
  ...borderBottom.propTypes,
  ...borderRadius.propTypes,
  ...flexDirection.propTypes,
  ...justifyContent.propTypes,
  inline: PropTypes.string,
};

Flex.displayName = 'Flex';
