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
import Switch from './components/switch';
import SearchSelect from './components/search-select';
import CreatableSearchSelect from './components/creatable-search-select';
// //////////////////////////////////////////////////

// TODO: check initial selected index and onSwitch
const MultiswitchComponent = ({ name, value, setFieldValue, options }) => (
  <Multiswitch
    options={options}
    selectedOptionIndex={0}
    value={R.or(value, null)}
    onSwitch={(value: string) => setFieldValue(name, value)}
  />
);

const SwitchComponent = ({ name, value, values, setFieldValue }) => (
  <Switch name={name} value={R.or(value, false)} checked={R.or(value, false)} setFieldValue={setFieldValue} />
);

const typeComponentMap = {
  input: Input,
  textarea: Textarea,
  switch: SwitchComponent,
  searchSelect: SearchSelect,
  multiswitch: MultiswitchComponent,
  creatableSearchSelect: CreatableSearchSelect,
};

export const FieldComponent = (props: Object) => {
  const { type, ...rest } = props;
  const Component = typeComponentMap[type];
  return <Component {...rest} />;
};

export const FormFields = props => (
  <Flex {...H.spreadUiProps(props.settings.wrapperStyles)}>
    {props.settings.fields.map((item: Object, index: number) => (
      <Flex key={index} flexDirection='column' {...H.spreadUiProps(item.wrapperStyles)}>
        {item.label && (
          <Flex>
            <Label {...H.spreadUiProps(item.label.styles)} htmlFor={item.input.name}>
              {H.getLocale(item.label.locale)}
            </Label>
          </Flex>
        )}
        <FieldComponent
          {...item.input}
          type={item.type}
          onBlur={props.handleBlur}
          onChange={props.handleChange}
          setFieldValue={props.setFieldValue}
          setFieldTouched={props.setFieldTouched}
          reactSelectStyles={item.reactSelectStyles}
          value={R.path(['values', item.input.name], props)}
          placeholder={H.getLocale(R.path(['input', 'placeholder'], item))}
        />
      </Flex>
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
