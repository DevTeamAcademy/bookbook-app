import { or, and } from 'ramda';
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
// //////////////////////////////////////////////////////////////////////////////

export const Textarea = styled.textarea`
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
  cursor: ${({ cursor }) => or(cursor, 'text')};
  &:focus {
    box-shadow: ${({ focusBoxShadow }) => or(focusBoxShadow, Theme.form.input.focusBoxShadow)};
  }
  &::placeholder {
    color: ${({ placeholderColor }) => placeholderColor};
  }
`;

Textarea.propTypes = {
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

Textarea.displayName = 'Textarea';
