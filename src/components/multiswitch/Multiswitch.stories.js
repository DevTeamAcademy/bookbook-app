import React, { Fragment } from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, color, number, boolean } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import JSXAddon from 'storybook-addon-jsx';
// components
import Multiswitch from './';
// ////////////////////////////////////////////////////////////////////////////////////////////////////

// NOTE: set to use 'addWithJSX' instead of 'add'
setAddon(JSXAddon);

const multiswitchOptions = [
  {
    width: 50,
    name: 'all',
    value: 'all',
  },
  {
    width: 50,
    name: 'Bookers',
    value: 'drivers',
  },
];

storiesOf('Multiswitch', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .addWithJSX('Multiswitch -> default', () => <Multiswitch selectedOptionIndex={0} options={multiswitchOptions} />);
