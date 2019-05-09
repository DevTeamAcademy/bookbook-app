import React from 'react';
import JSXAddon from 'storybook-addon-jsx';
import { withInfo } from '@storybook/addon-info';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, color } from '@storybook/addon-knobs/react';
// ui
import { Flex } from './';
// ////////////////////////////////////////////////////////////////////////////////////////////////////

// NOTE: set to use 'addWithJSX' instead of 'add'
setAddon(JSXAddon);

storiesOf('UI Flex', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .addWithJSX('Flex -> default', () => <Flex>Flex children here</Flex>)
  .addWithJSX('Flex -> with some props', () => (
    <Flex
      bg={color('bg', 'red')}
      color={color('color', 'white')}
      border={text('border', '1px solid')}
      borderColor={color('borderColor', 'black')}
    >
      Flex children here
    </Flex>
  ));
