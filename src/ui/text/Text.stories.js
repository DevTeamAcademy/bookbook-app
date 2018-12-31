import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, color } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import JSXAddon from 'storybook-addon-jsx';
// ui
import { Text } from './';
// ////////////////////////////////////////////////////////////////////////////////////////////////////

// NOTE: set to use 'addWithJSX' instead of 'add'
setAddon(JSXAddon);

storiesOf('UI Details', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .addWithJSX('Text -> default', () => <Text>Text here</Text>)
  .addWithJSX('Text -> with some props', () => (
    <Text
      color={color('color', 'red')}
      fontWeight={text('fontWeight', '700')}>
      Text here
    </Text>
  ))
