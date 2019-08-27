import R from 'ramda';
import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
// theme
import Theme from '../../../theme';
///////////////////////////////////////////////////////////////////////////////////////////////////

const getStyles = reactSelectStyles => ({
  input: (provided, state) => ({ ...provided, ...reactSelectStyles.input }),
  control: (provided, state) => ({
    ...provided,
    ...reactSelectStyles.control,
    boxShadow: state.isFocused ? Theme.shadows.formInputDefault : 'none',
  }),
});

// TODO: concat async options
export const SearchSelect = props => {
  const {
    name,
    value,
    isMulti,
    options,
    isLoading,
    isDisabled,
    placeholder,
    isClearable,
    isSearchable,
    setFieldValue,
    setFieldTouched,
    reactSelectStyles,
  } = props;
  const styles = getStyles(reactSelectStyles);
  const handleBlur = () => setFieldTouched(name, true);
  const handleChange = (value: any) => setFieldValue(name, value);
  return (
    <Select
      id={name}
      value={value}
      styles={styles}
      isMulti={isMulti}
      options={options}
      onBlur={handleBlur}
      onChange={handleChange}
      placeholder={placeholder}
      isLoading={R.or(isLoading, false)}
      isDisabled={R.or(isDisabled, false)}
      isClearable={R.or(isClearable, false)}
      isSearchable={R.or(isSearchable, true)}
    />
  );
};

export default SearchSelect;

SearchSelect.propTypes = {
  value: PropTypes.any,
  onBlur: PropTypes.func,
  isMulti: PropTypes.bool,
  options: PropTypes.array,
  onChange: PropTypes.func,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isClearable: PropTypes.bool,
  isSearchable: PropTypes.bool,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  reactSelectStyles: PropTypes.shape({
    input: PropTypes.object,
    control: PropTypes.object,
  }),
};

SearchSelect.displayName = 'SearchSelect';
