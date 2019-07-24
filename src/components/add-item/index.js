import R from 'ramda';
import React from 'react';
//components
import TextEllipsed from '../text-ellipsed';
// helpers
import * as H from '../../helpers';
// settings
import settings from './settings';
// ui
import { Box, Flex } from '../../ui';
/////////////////////////////////////////////////////////////////////////////

const pathToSettings = (itemType, settingsType) =>
  R.pathOr(settings().default[itemType], [settingsType, itemType], settings());

export const AddItemComponent = props => (
  <Flex {...pathToSettings('wrapper', props.settingsType)}>
    {H.isNotNilAndNotEmpty(props.text) && (
      <TextEllipsed title={props.text} {...pathToSettings('text', props.settingsType)}>
        {props.text}
      </TextEllipsed>
    )}
    {H.isNotNilAndNotEmpty(props.icon) && (
      <Box onClick={props.action} {...pathToSettings('icon', props.settingsType)}>
        {props.icon}
      </Box>
    )}
  </Flex>
  // <div>{console.log('pathToSettings', settings)}</div>
);

export default AddItemComponent;
