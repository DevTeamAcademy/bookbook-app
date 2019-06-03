import React from 'react';
import { path } from 'ramda';
import PropTypes from 'prop-types';
import { themeGet } from 'styled-system';
// helpers
import * as H from '../../helpers';
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
        <Flex>
          <Label
            {...H.spreadUiProps(item.label.styles)}
            htmlFor={item.fieldName}
            color={themeGet(item.label.color, 'black')(props)}
            requiredStarColor={themeGet('form.label.color', 'red')(props)}
          >
            {H.getLocale(item.label.locale, '...', props.locale)}
          </Label>
        </Flex>
        <FieldComponent
          {...item.input}
          onBlur={props.handleBlur}
          onChange={props.handleChange}
          value={path([item.fieldName, 'values'], props)}
        />
      </Box>
    ))}
  </Flex>
);

export default FormFields;

// TODO: add all props
FormFields.propTypes = {
  theme: PropTypes.object,
  locale: PropTypes.object,
  fields: PropTypes.object,
};

FormFields.displayName = 'FormFields';
