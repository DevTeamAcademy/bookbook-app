import R from 'ramda';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  color,
  space,
  width,
  height,
  border,
  display,
  fontSize,
  boxShadow,
  borderColor,
  borderRadius,
} from 'styled-system';
// theme
import Theme from '../../../theme';
// ui
import { renderBgColor, renderBorderColor } from '../../helpers';
// //////////////////////////////////////////////////////////////////////////////

// TODO: with render border

export const Input = styled.input`
  ${color}
  ${space}
  ${width}
  ${height}
  ${border}
  ${display}
  ${fontSize}
  ${boxShadow}
  ${borderColor}
  ${borderRadius}
  outline: none;
  cursor: ${({ cursor }) => R.or(cursor, 'text')};
  &:focus {
    box-shadow: ${({ focusBoxShadow }) => R.or(focusBoxShadow, Theme.form.input.focusBoxShadow)};
  }
  &::placeholder {
    color: ${({ placeholderColor }) => placeholderColor};
  }
`;

Input.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
  ...width.propTypes,
  ...height.propTypes,
  ...border.propTypes,
  ...display.propTypes,
  ...fontSize.propTypes,
  ...boxShadow.propTypes,
  ...borderColor.propTypes,
  ...borderRadius.propTypes,
  cursor: PropTypes.string,
  focusBoxShadow: PropTypes.string,
  placeholderColor: PropTypes.string,
};

Input.displayName = 'Input';
