import React, { Fragment } from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import JSXAddon from 'storybook-addon-jsx';
// ui
import { Text } from './text';
// ////////////////////////////////////////////////////////////////////////////////////////////////////

// NOTE: set to use 'addWithJSX' instead of 'add'
setAddon(JSXAddon);

const UIList = () => (
  <Fragment>
    Text: <Text>Some text here</Text> 
  </Fragment>
);

storiesOf('Full UI List', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .addDecorator(withInfo)
  .add('List', () => <UIList />)
