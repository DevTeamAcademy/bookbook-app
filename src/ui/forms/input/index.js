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

// TODO: move all theme dependent staff to props

export const renderBorderColor = (props: Object) => {
  if (and(props.error, props.touched)) {
    return Theme.form.input.errorBorderColor;
  }
  return Theme.form.input.borderColor;
};

export const renderBgColor = (props: Object) => {
  if (props.disabled) {
    return Theme.form.input.disabledBgColor;
  }
  return Theme.form.input.bgColor;
};

// props.theme.forms.input.focusBoxShadow: 0 0 5px 0 rgba(206, 40, 40, 0.5)

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
  cursor: ${({ cursor }) => or(cursor, 'text')};
  &:focus {
    box-shadow: ${({ focusBoxShadow }) => or(focusBoxShadow, '0 0 5px 0 rgba(206, 40, 40, 0.5)')};
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
};

Input.displayName = 'Input';
