import { or } from 'ramda';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, space, width, height, border, display, opacity, boxShadow } from 'styled-system';
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
  cursor: ${({ cursor }) => or(cursor, 'initial')}
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
  cursor: PropTypes.string,
};

IconWrapper.defaultProps = {
  opacity: 0.8,
  cursor: 'pointer',
  display: 'inline-block',
};

IconWrapper.displayName = 'Text';
