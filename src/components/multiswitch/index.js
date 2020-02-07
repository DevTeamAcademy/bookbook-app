import React, { useState, useEffect } from 'react';
import * as R from 'ramda';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, width, height, display, position } from 'styled-system';
// helpers
import * as H from '../../helpers';
// theme
import Theme from '../../theme';
// ui
import { Flex, Box, PositionedBox } from '../../ui';
// //////////////////////////////////////////////////

// TODO: with theme
// TODO: remove after adding global styles
export const MultiswitchWrapper = styled(Flex)`
  box-sizing: border-box;
`;

export const RadioWrapper = styled(Box)`
  cursor: pointer;
`;

export const Label = styled.label`
  ${width}
  ${color}
  ${height}
  ${display}
  ${position}
  transition: 0.5s all;
`;

Label.propTypes = {
  ...color.propTypes,
  ...width.propTypes,
  ...height.propTypes,
  ...display.propTypes,
  ...position.propTypes,
};

export const RadioBackground = styled(PositionedBox)`
  transition: 0.5s all, 0.5s border-radius 0.2s;
  transform: translate(${({ forTransform }) => `${R.divide(forTransform, 2)}px`}, 6px);
`;

RadioBackground.propTypes = {
  forTransform: PropTypes.string,
};

export const Radio = styled.input`
  ${display}
  &:checked ~ ${Label} {
    color: ${({ checkedColor }) => checkedColor};
  }
  &:checked ~ ${RadioBackground} {
    opacity: 1;
    width: 100%;
    border-radius: 1px;
    transform: translate(0, 0);
    height: ${({ height }) => height};
  }
`;

Radio.propTypes = {
  ...color.propTypes,
  ...display.propTypes,
  id: PropTypes.number,
  defaultChecked: PropTypes.bool,
};

const RadioOption = props => (
  <Box
    cursor='pointer'
    textAlign='center'
    position='relative'
    p={props.settings.itemPadding}
    height={props.settings.height}
    width={props.radioOption.width}
    fontSize={props.settings.fontSize}
    lineHeight={props.settings.height}
    minWidth={props.settings.minWidth}
    fontWeight={props.settings.fontWeight}
  >
    <Radio
      type='radio'
      display='none'
      name='switcher'
      id={props.index}
      onChange={props.onSwitch}
      height={props.settings.height}
      value={props.radioOption.value}
      checkedColor={props.settings.checkedColor}
      checked={R.equals(props.value, props.index)}
    />
    <RadioBackground
      top='0'
      left='0'
      width='0'
      height='0'
      position='absolute'
      bg={props.settings.checkedBg}
      forTransform={props.radioOption.width}
      borderRadius={props.settings.borderRadius}
    />
    <Label
      display='block'
      position='relative'
      htmlFor={props.index}
      height={props.settings.height}
      width={props.radioOption.labelWidth}
    >
      {props.radioOption.name}
    </Label>
  </Box>
);

const optionPropType = PropTypes.shape({
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
});

RadioOption.propTypes = {
  index: PropTypes.number,
  radioOption: optionPropType,
  selectedOptionIndex: PropTypes.number,
  settings: PropTypes.shape({
    bg: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    fontSize: PropTypes.string.isRequired,
    checkedBg: PropTypes.string.isRequired,
    fontWeight: PropTypes.string.isRequired,
    checkedColor: PropTypes.string.isRequired,
    borderRadius: PropTypes.string.isRequired,
  }),
};

const makeWrapperSettings = settings => ({
  m: settings.multiswitchMargin,
  height: R.or(settings.height, '15px'),
  fontSize: R.or(settings.fontSize, '12px'),
  width: R.or(settings.width, 'max-content'),
  border: R.or(settings.border, '1px solid'),
  bg: R.or(settings.bg, Theme.multiswitch.bg),
  fontWeight: R.or(settings.fontWeight, 'bold'),
  minWidth: R.or(settings.minWidth, 'max-content'),
  itemPadding: R.or(settings.itemPadding, '0 3px'),
  borderRadius: R.or(settings.borderRadius, '7px'),
  color: R.or(settings.color, Theme.multiswitch.color),
  checkedBg: R.or(settings.checkedBg, Theme.multiswitch.checkedBg),
  borderColor: R.or(settings.borderColor, Theme.multiswitch.borderColor),
  checkedColor: R.or(settings.checkedColor, Theme.multiswitch.checkedColor),
});

export const Multiswitch = props => {
  const settings = makeWrapperSettings(R.or(props.settings, {}));
  let incomeValue = R.findIndex(R.propEq('value', props.value), props.options);
  if (R.equals(incomeValue, -1)) {
    incomeValue = R.or(props.selectedOptionIndex, 0);
  }
  const [value, setValue] = useState(incomeValue);
  useEffect(() => {
    setValue(incomeValue);
  }, [incomeValue]);
  const onSwitch = e => {
    const newValue = R.pathOr(value, ['target', 'value'], e);
    if (H.isFunction(props.onSwitch)) {
      props.onSwitch(newValue);
      return;
    }
    setValue(R.findIndex(R.propEq('value', newValue), props.options));
  };
  return (
    <MultiswitchWrapper
      display='flex'
      m={settings.m}
      bg={settings.bg}
      overflow='hidden'
      position='relative'
      alignItems='center'
      width={settings.width}
      color={settings.color}
      height={settings.height}
      border={settings.border}
      borderColor={settings.borderColor}
      borderRadius={settings.borderRadius}
    >
      {props.options.map((radioOption, index) => (
        <RadioOption
          key={index}
          index={index}
          value={value}
          settings={settings}
          onSwitch={onSwitch}
          radioOption={radioOption}
        />
      ))}
    </MultiswitchWrapper>
  );
};

export default Multiswitch;

Multiswitch.propTypes = {
  selectedOptionIndex: PropTypes.number,
  options: PropTypes.arrayOf(optionPropType).isRequired,
  settings: PropTypes.shape({
    color: PropTypes.string,
    height: PropTypes.string,
    fontSize: PropTypes.string,
    checkedBg: PropTypes.string,
    fontWeight: PropTypes.string,
    background: PropTypes.string,
    checkedColor: PropTypes.string,
    borderRadius: PropTypes.string,
  }),
};

Multiswitch.displayName = 'Multiswitch';
