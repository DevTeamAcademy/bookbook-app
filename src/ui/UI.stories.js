import React, { Fragment } from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import JSXAddon from 'storybook-addon-jsx';
// ui
import { Box, Flex, Text } from './';
// ////////////////////////////////////////////////////////////////////////////////////////////////////

// NOTE: set to use 'addWithJSX' instead of 'add'
setAddon(JSXAddon);

const UIList = () => (
  <Fragment>
    Box: <Box>Box children here</Box>
    Flex: <Flex>Flex children here</Flex>
    Text: <Text>Some text here</Text>
  </Fragment>
);

storiesOf('Full UI List', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .addDecorator(withInfo)
  .add('List', () => <UIList />);
