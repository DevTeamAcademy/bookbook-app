import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  color,
  space,
  width,
  opacity,
  display,
  fontSize,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing,
} from 'styled-system';
// //////////////////////////////////////////////////////////////////////////////

export const Text = styled.span`
  ${color}
  ${space}
  ${width}
  ${display}
  ${opacity}
  ${fontSize}
  ${textAlign}
  ${lineHeight}
  ${fontWeight}
  ${letterSpacing}
  cursor: ${({ cursor }) => cursor};
  text-decoration: ${({ textDecoration }) => textDecoration};
  &:hover {
    text-decoration: ${({ hoverTextDecoration }) => hoverTextDecoration};
  }
`;

Text.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
  ...width.propTypes,
  ...display.propTypes,
  ...opacity.propTypes,
  ...fontSize.propTypes,
  ...textAlign.propTypes,
  ...lineHeight.propTypes,
  ...fontWeight.propTypes,
  ...letterSpacing.propTypes,
  cursor: PropTypes.string,
  textDecoration: PropTypes.string,
  hoverTextDecoration: PropTypes.string,
};

Text.displayName = 'Text';
