import React, { Fragment } from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import JSXAddon from 'storybook-addon-jsx';
// components
import { HeaderNav, TextEllipsed } from './';
// ui
import { Box, Flex, Text } from '../ui';

// ////////////////////////////////////////////////////////////////////////////////////////////////////

// NOTE: set to use 'addWithJSX' instead of 'add'
setAddon(JSXAddon);

const ComponentsList = () => (
  <Flex flexDirection='column'>
    {/* <Box m={10}>
      HeaderNav: <HeaderNav />
    </Box> */}
    <Box m={10}>
      TextEllipsed: <TextEllipsed>Some text here</TextEllipsed>
    </Box>
  </Flex>
);

storiesOf('Full Components List', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .addDecorator(withInfo)
  .add('List', () => <ComponentsList />);
