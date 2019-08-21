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
  background,
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
  ${background}
  ${alignItems}
  ${borderColor}
  ${borderRight}
  ${borderBottom}
  ${borderRadius}
  ${flexDirection}
  ${justifyContent}
  cursor: ${({ cursor }) => cursor};
  overflow-y: ${({ overflowY }) => overflowY};
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
  ...background.propTypes,
  ...borderLeft.propTypes,
  ...alignItems.propTypes,
  ...borderColor.propTypes,
  ...borderRight.propTypes,
  ...borderBottom.propTypes,
  ...borderRadius.propTypes,
  ...flexDirection.propTypes,
  ...justifyContent.propTypes,
  cursor: PropTypes.string,
  inline: PropTypes.string,
  overflowY: PropTypes.string,
};

Flex.displayName = 'Flex';
