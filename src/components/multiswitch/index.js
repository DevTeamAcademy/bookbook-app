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
    ${color}
  }
  &:checked ~ ${RadioBackground} {
    opacity: 1;
    height: 12px;
    width: 100%;
    border-radius: 1px;
    transform: translate(0, 0);
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
    height='12px'
    fontSize='7px'
    lineHeight='12px'
    fontWeight='bold'
    textAlign='center'
    position='relative'
    width={props.radioOption.width}
  >
    <Radio
      type='radio'
      display='none'
      color='#363135'
      name='switcher'
      id={props.index}
      defaultChecked={R.equals(props.selectedOptionIndex, props.index)}
    />
    <RadioBackground
      top='0'
      left='0'
      width='0'
      height='0'
      borderRadius='6px'
      position='absolute'
      background='#e6dda6'
      forTransform={props.radioOption.width}
    />
    <Label
      height='12px'
      color='#eeeeee'
      display='block'
      position='relative'
      htmlFor={props.index}
      width={props.radioOption.width}
    >
      {props.radioOption.name}
    </Label>
  </RadioWrapper>
);

const optionPropType = PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]));

RadioOption.propTypes = {
  index: PropTypes.number,
  radioOption: optionPropType,
  selectedOptionIndex: PropTypes.number,
};

const MultiswitchComponent = props => (
  <MultiswitchWrapper
    mr={props.mr}
    height='12px'
    display='flex'
    fontSize='11px'
    color='#eeeeee'
    overflow='hidden'
    borderRadius='6px'
    position='relative'
    width='max-content'
    alignItems='center'
    background='#615d60'
    data-testid={C.TEST_ID_MULTISWITCH}
  >
    {props.options.map((radioOption, index) => (
      <RadioOption {...props} key={index} index={index} radioOption={radioOption} />
    ))}
  </MultiswitchWrapper>
);

MultiswitchComponent.propTypes = {
  selectedOptionIndex: PropTypes.number,
  options: PropTypes.arrayOf(optionPropType),
};

MultiswitchComponent.displayName = 'Multiswitch';

export default MultiswitchComponent;
