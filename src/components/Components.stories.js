import React from 'react';
import JSXAddon from 'storybook-addon-jsx';
import { withInfo } from '@storybook/addon-info';
import { setAddon, storiesOf } from '@storybook/react';
// components
import { TextEllipsed } from './';
// ui
import { Box, Flex } from '../ui';
// ////////////////////////////////////////////////////////////////////////////////////////////////////

// NOTE: set to use 'addWithJSX' instead of 'add'
setAddon(JSXAddon);

const ComponentsList = () => (
  <Flex flexDirection='column'>
    <Box m={10}>
      TextEllipsed: <TextEllipsed>Some text here</TextEllipsed>
    </Box>
  </Flex>
);

storiesOf('Full Components List', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .addDecorator(withInfo)
  .add('List', () => <ComponentsList />);
