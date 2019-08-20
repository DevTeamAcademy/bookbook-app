import R from 'ramda';
import React from 'react';
import Select from 'react-select';
// helpers
import * as H from '../../../helpers';
///////////////////////////////////////////////////////////////////////////////////////////////////

// TODO: check moving to common

/**
 * @param {Object} provided -- the component's default styles
 * @param {Object} state -- the component's current state e.g. `isFocused`
 * @returns {Object}
 */
const getStyles = reactSelectStyles => ({
  input: (provided, state) => ({ ...provided, ...reactSelectStyles.input }),
  control: (provided, state) => ({ ...provided, ...reactSelectStyles.control }),
});

export const SearchSelect = props => {
  const {
    name,
    value,
    isMulti,
    options,
    placeholder,
    isLoading,
    isDisabled,
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

// TODO: with all propTypes
SearchSelect.propTypes = {};

// SearchSelect.propTypes = {
//   selectedOptionIndex: PropTypes.number,
//   options: PropTypes.arrayOf(optionPropType).isRequired,
//   settings: PropTypes.shape({
//     color: PropTypes.string,
//     height: PropTypes.string,
//     fontSize: PropTypes.string,
//     checkedBg: PropTypes.string,
//     fontWeight: PropTypes.string,
//     background: PropTypes.string,
//     checkedColor: PropTypes.string,
//     borderRadius: PropTypes.string,
//   }),
// };

SearchSelect.displayName = 'SearchSelect';
