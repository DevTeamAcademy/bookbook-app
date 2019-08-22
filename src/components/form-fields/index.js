import R from 'ramda';
import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
// components
import { Multiswitch } from '../../components';
// helpers
import * as H from '../../helpers';
// ui
import { Box, Flex, Input, Label, Textarea } from '../../ui';
// form-fields
import SearchSelect from './components/search-select';
// /////////////////////////////////////////////////////////////////////////////////////////////////

// TODO: check initial selected index and onSwitch
const MultiswitchComponent = ({ name, value, onChange, options }) => (
  <Multiswitch
    options={options}
    selectedOptionIndex={0}
    value={R.or(value, null)}
    onSwitch={(value: string) => onChange(name, value)}
  />
);

const typeComponentMap = {
  input: Input,
  textarea: Textarea,
  searchSelect: SearchSelect,
  multiswitch: MultiswitchComponent,
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
            <Label {...H.spreadUiProps(item.label.styles)} htmlFor={item.input.name}>
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
          setFieldValue={props.setFieldValue}
          setFieldTouched={props.setFieldTouched}
          reactSelectStyles={item.reactSelectStyles}
          value={R.path([item.input.name, 'values'], props)}
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
