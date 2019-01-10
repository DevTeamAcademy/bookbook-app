import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, color } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import JSXAddon from 'storybook-addon-jsx';
// ui
import { Box } from './';
// ////////////////////////////////////////////////////////////////////////////////////////////////////

// NOTE: set to use 'addWithJSX' instead of 'add'
setAddon(JSXAddon);

storiesOf('Box', module)
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
