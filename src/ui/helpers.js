import R from 'ramda';
// theme
import Theme from '../theme';
// //////////////////////////////////////////////////////////////////////////////

export const renderBorderColor = (props: Object) => {
  if (R.and(props.error, props.touched)) {
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
