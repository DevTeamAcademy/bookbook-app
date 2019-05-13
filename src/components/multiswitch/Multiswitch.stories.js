import React from 'react';
import JSXAddon from 'storybook-addon-jsx';
import { withInfo } from '@storybook/addon-info';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
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
    value: 'bookers',
  },
];

const multiswitchSettings = {
  height: '20px',
};

storiesOf('Multiswitch', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .addWithJSX('Multiswitch -> default', () => (
    <Multiswitch settings={multiswitchSettings} selectedOptionIndex={0} options={multiswitchOptions} />
  ));
