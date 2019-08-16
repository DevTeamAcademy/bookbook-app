import R from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
// helpers
import * as H from '../../helpers';
// ui
import { Box, Flex, Input, Label, Textarea } from '../../ui';
// /////////////////////////////////////////////////////////////////////////////////////////////////

const typeComponentMap = {
  input: Input,
  textarea: Textarea,
};

export const FieldComponent = (props: Object) => {
  const type = props.type;
  const fieldProps = R.omit('type', props);
  const Component = typeComponentMap[type];
  return <Component {...fieldProps} />;
};

export const FormFields = props => (
  <Flex {...H.spreadUiProps(props.settings.wrapperStyles)}>
    {props.settings.fields.map((item: Object, index: number) => (
      <Box key={index} {...H.spreadUiProps(item.wrapperStyles)}>
        {item.label && (
          <Flex>
            <Label {...H.spreadUiProps(item.label.styles)} htmlFor={item.fieldName}>
              {H.getLocale(item.label.locale)}
            </Label>
          </Flex>
        )}
        <div />
        <FieldComponent
          {...item.input}
          type={item.type}
          onBlur={props.handleBlur}
          onChange={props.handleChange}
          value={R.path([item.fieldName, 'values'], props)}
          placeholder={H.getLocale(R.path(['input', 'placeholder'], item))}
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
