import R from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
// helpers
import * as H from '../../helpers';
// theme
import Theme from '../../theme';
// ui
import { Box, Flex, Input, Label } from '../../ui';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export const FieldComponent = (props: Object) => {
  return <Input {...props} />;
};

export const FormFields = props => (
  <Flex {...H.spreadUiProps(props.settings.wrapperStyles)}>
    {props.settings.fields.map((item: Object, index: number) => (
      <Box key={index} {...H.spreadUiProps(item.wrapperStyles)}>
        {item.label && (
          <Flex>
            <Label {...Theme.label} {...H.spreadUiProps(item.label.styles)} htmlFor={item.fieldName}>
              {H.getLocale(item.label.locale)}
            </Label>
          </Flex>
        )}
        <div />
        <FieldComponent
          {...item.input}
          onBlur={props.handleBlur}
          onChange={props.handleChange}
          value={R.path([item.fieldName, 'values'], props)}
          placeholder={H.getLocale(item.input.placeholder)}
        />
      </Box>
    ))}
  </Flex>
);

export default FormFields;

FormFields.propTypes = {
  handleBlur: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

FormFields.displayName = 'FormFields';
