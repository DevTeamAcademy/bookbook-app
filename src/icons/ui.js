import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, space, width, height, border, display, opacity, boxShadow, borderRadius } from 'styled-system';
// ////////////////////////////////////////////////////////////////////////////////////////////////////

export const IconWrapper = styled.div`
  ${color}
  ${space}
  ${width}
  ${height}
  ${border}
  ${display}
  ${opacity}
  ${boxShadow}
  ${borderRadius}
  cursor: ${({ cursor }) => cursor}
  transform: ${({ transform }) => transform};
  &:hover {
    opacity: 1;
  }
`;

IconWrapper.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
  ...width.propTypes,
  ...height.propTypes,
  ...border.propTypes,
  ...display.propTypes,
  ...opacity.propTypes,
  ...boxShadow.propTypes,
  ...borderRadius.propTypes,
  cursor: PropTypes.string,
  transform: PropTypes.string,
};

IconWrapper.defaultProps = {
  opacity: 0.8,
  cursor: 'pointer',
  display: 'inline-block',
};

IconWrapper.displayName = 'Text';
