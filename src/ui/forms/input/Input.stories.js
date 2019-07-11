import React from 'react';
import JSXAddon from 'storybook-addon-jsx';
import { withInfo } from '@storybook/addon-info';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, color } from '@storybook/addon-knobs/react';
// theme
import Theme from '../../../theme';
// ui
import { Input } from './';
// ////////////////////////////////////////////////////////////////////////////////////////////////////

// NOTE: set to use 'addWithJSX' instead of 'add'
setAddon(JSXAddon);

storiesOf('UI Forms Input', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .addWithJSX('Input -> default', () => <Input />)
  .addWithJSX('Input -> with some props', () => (
    <Input
      bg={color('bg', 'grey')}
      color={color('color', 'white')}
      border={text('border', '1px solid')}
      borderColor={color('borderColor', 'black')}
      focusBoxShadow={Theme.form.input.focusBoxShadow}
    />
  ));
