import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  size,
  ratio,
  color,
  space,
  width,
  height,
  border,
  opacity,
  overflow,
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
  ${ratio}
  ${color}
  ${space}
  ${width}
  ${height}
  ${border}
  ${opacity}
  ${overflow}
  ${flexWrap}
  ${position}
  ${maxWidth}
  ${minWidth}
  ${maxHeight}
  ${minHeight}
  ${boxShadow}
  ${borderTop}
  ${background}
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
  ...ratio.propTypes,
  ...color.propTypes,
  ...space.propTypes,
  ...width.propTypes,
  ...height.propTypes,
  ...border.propTypes,
  ...opacity.propTypes,
  ...overflow.propTypes,
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
  inline: PropTypes.string,
};

Flex.displayName = 'Flex';
