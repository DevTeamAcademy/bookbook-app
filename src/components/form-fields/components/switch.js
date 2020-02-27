import * as R from 'ramda';
import React from 'react';
import ReactSwitch from 'react-switch';
// helpers
import * as H from '../../../helpers';
// theme
import Theme from '../../../theme';
import { Flex } from '../../../ui';
///////////////////////////////////////////////////////////////////////////////////////////////////

const makeSettings = (settings = {}) => ({
  height: R.or(settings.height, 18),
  width: R.or(settings.width, 40),
  border: R.or(settings.border, '2px solid'),
  checkedIcon: R.or(settings.checkedIcon, false),
  wrapHeight: R.add(R.or(settings.height, 18), 4),
  handleDiameter: R.or(settings.handleDiameter, 16),
  uncheckedIcon: R.or(settings.uncheckedIcon, false),
  onColor: R.or(settings.onColor, Theme.switch.onColor),
  offColor: R.or(settings.offColor, Theme.switch.offColor),
  onBgColor: R.or(settings.onBgColor, Theme.switch.onBgColor),
  offBgColor: R.or(settings.offBgColor, Theme.switch.offBgColor),
  onBorderColor: R.or(R.or(settings.onBorderColor, settings.onColor), Theme.switch.onBorderColor),
  offBorderColor: R.or(R.or(settings.offBorderColor, settings.offColor), Theme.switch.offBorderColor),
});

const Switch = ({ value, setFieldValue, name, checked, ...rest }) => {
  const settings = makeSettings(rest.settings);
  const handleChange = (value: any) => setFieldValue(name, value);
  return (
    <Flex
      width='max-content'
      alignItems='center'
      border={settings.border}
      height={settings.wrapHeight}
      borderRadius={settings.handleDiameter}
      borderColor={H.ifElse(H.isTrue(checked), settings.onBorderColor, settings.offBorderColor)}
    >
      <ReactSwitch
        value={value}
        checked={checked}
        width={settings.width}
        onChange={handleChange}
        height={settings.height}
        onColor={settings.offBgColor}
        offColor={settings.onBgColor}
        onHandleColor={settings.onColor}
        offHandleColor={settings.offColor}
        checkedIcon={settings.checkedIcon}
        uncheckedIcon={settings.uncheckedIcon}
        handleDiameter={settings.handleDiameter}
      />
    </Flex>
  );
};

export default Switch;
