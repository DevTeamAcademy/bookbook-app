import React from 'react';
import JSXAddon from 'storybook-addon-jsx';
import { withInfo } from '@storybook/addon-info';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
// ui
import { Box } from '../';
import { AbsoluteWrapper } from './';
// ////////////////////////////////////////////////////////////////////////////////////////////////////

// NOTE: set to use 'addWithJSX' instead of 'add'
setAddon(JSXAddon);

storiesOf('UI Wrappers', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .addWithJSX('AbsoluteWrapper', () => (
    <Box position='relative'>
      <AbsoluteWrapper top={text('top', '0')} left={text('left', '50%')}>
        Absolute content here
      </AbsoluteWrapper>
    </Box>
  ));
