import React from 'react';
import * as R from 'ramda';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { top, left, color, width, height, display, position, background, borderRadius } from 'styled-system';
// constants
import * as C from '../../constants';
// ui
import { Flex, Box } from '../../ui';
// /////////////////////////////////////////////////////////////////////////////////////////////////

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

export const RadioBackground = styled.div`
  ${top}
  ${left}
  ${width}
  ${height}
  ${position}
  ${background}
  ${borderRadius}
  transition: 0.5s all, 0.5s border-radius .2s;
  transform: translate(${({ forTransform }) => `${forTransform / 2}px`}, 6px);
`;

RadioBackground.propTypes = {
  ...top.propTypes,
  ...left.propTypes,
  ...width.propTypes,
  ...height.propTypes,
  ...position.propTypes,
  ...background.propTypes,
  ...borderRadius.propTypes,
  forTransform: PropTypes.number,
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
  <RadioWrapper
    textAlign='center'
    position='relative'
    height={props.settings.height}
    width={props.radioOption.width}
    fontSize={props.settings.fontSize}
    lineHeight={props.settings.height}
    fontWeight={props.settings.fontWeight}
  >
    <Radio
      type='radio'
      display='none'
      name='switcher'
      id={props.index}
      height={props.settings.height}
      checkedColor={props.settings.checkedColor}
      defaultChecked={R.equals(props.selectedOptionIndex, props.index)}
    />
    <RadioBackground
      top='0'
      left='0'
      width='0'
      height='0'
      position='absolute'
      background={props.settings.checkedBg}
      forTransform={props.radioOption.width}
      borderRadius={props.settings.borderRadius}
    />
    <Label
      display='block'
      position='relative'
      htmlFor={props.index}
      height={props.settings.height}
      width={props.radioOption.width}
    >
      {props.radioOption.name}
    </Label>
  </RadioWrapper>
);

const optionPropType = PropTypes.shape({
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
});

RadioOption.propTypes = {
  index: PropTypes.number,
  radioOption: optionPropType,
  selectedOptionIndex: PropTypes.number,
  settings: PropTypes.shape({
    color: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    fontSize: PropTypes.string.isRequired,
    checkedBg: PropTypes.string.isRequired,
    fontWeight: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    checkedColor: PropTypes.string.isRequired,
    borderRadius: PropTypes.string.isRequired,
  }),
};

const makeWrapperSettings = settings => ({
  height: R.or(settings.height, '7px'),
  color: R.or(settings.color, '#eeeeee'),
  fontSize: R.or(settings.fontSize, '11px'),
  fontWeight: R.or(settings.fontWeight, 'bold'),
  checkedBg: R.or(settings.checkedBg, '#e6dda6'),
  borderRadius: R.or(settings.borderRadius, '6px'),
  background: R.or(settings.background, '#615d60'),
  checkedColor: R.or(settings.checkedColor, '#363135'),
});

const MultiswitchComponent = props => {
  const settings = makeWrapperSettings(props.settings);
  return (
    <MultiswitchWrapper
      display='flex'
      overflow='hidden'
      position='relative'
      width='max-content'
      alignItems='center'
      color={settings.color}
      height={settings.height}
      background={settings.background}
      data-testid={C.TEST_ID_MULTISWITCH}
      borderRadius={settings.borderRadius}
    >
      {props.options.map((radioOption, index) => (
        <RadioOption
          key={index}
          index={index}
          settings={settings}
          radioOption={radioOption}
          selectedOptionIndex={props.selectedOptionIndex}
        />
      ))}
    </MultiswitchWrapper>
  );
};

MultiswitchComponent.propTypes = {
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

MultiswitchComponent.displayName = 'Multiswitch';

export default MultiswitchComponent;
