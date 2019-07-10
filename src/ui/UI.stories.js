import React from 'react';
import JSXAddon from 'storybook-addon-jsx';
import { withInfo } from '@storybook/addon-info';
import { setAddon, storiesOf } from '@storybook/react';
// ui
import { Box, Flex, Text } from './';
import { Input } from './forms/input';
// ////////////////////////////////////////////////////////////////////////////////////////////////////

// NOTE: set to use 'addWithJSX' instead of 'add'
setAddon(JSXAddon);

const UIList = () => (
  <Flex flexDirection='column'>
    <Box m={10}>
      Box: <Box>Box children here</Box>
    </Box>
    <Box m={10}>
      Flex: <Flex>Flex children here</Flex>
    </Box>
    <Box m={10}>
      Text: <Text>Some text here</Text>
    </Box>
    <Box m={10}>
      Input: <Input />
    </Box>
  </Flex>
);

storiesOf('Full UI List', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .addDecorator(withInfo)
  .add('List', () => <UIList />);
