import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, color } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import JSXAddon from 'storybook-addon-jsx';
// ui
import { Box, PositionedBox } from './';
// ////////////////////////////////////////////////////////////////////////////////////////////////////

// NOTE: set to use 'addWithJSX' instead of 'add'
setAddon(JSXAddon);

storiesOf('UI Box', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .addWithJSX('Box -> default', () => <Box>Box children here</Box>)
  .addWithJSX('Box -> with some props', () => (
    <Box
      bg={color('bg', 'red')}
      color={color('color', 'white')}
      border={text('border', '1px solid')}
      borderColor={color('borderColor', 'black')}
    >
      Box children here
    </Box>
  ));

storiesOf('UI PositionedBox', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .addWithJSX('PositionedBox -> with some props', () => (
    <PositionedBox
      width='200px'
      height='50px'
      position='relative'
      bg={color('bg', 'lightgray')}
      border={text('border', '1px solid')}
      borderColor={color('borderColor', 'black')}
    >
      <PositionedBox top='0' right='0' color='black' bg='lightblue' position='absolute'>
        PositionedBox
      </PositionedBox>
    </PositionedBox>
  ));
