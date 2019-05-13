import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, color, boolean } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import JSXAddon from 'storybook-addon-jsx';
// components
import TextEllipsed from './';
// ////////////////////////////////////////////////////////////////////////////////////////////////////

// NOTE: set to use 'addWithJSX' instead of 'add'
setAddon(JSXAddon);

storiesOf('TextEllipsed', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .addWithJSX('TextEllipsed -> default', () => <TextEllipsed>Some text here</TextEllipsed>)
  .addWithJSX('TextEllipsed -> with props', () => (
    <TextEllipsed
      title='An ellipsed text here'
      color={color('color', 'blue')}
      display={text('display', 'block')}
      maxWidth={text('maxWidth', '100px')}
      withEllipsis={boolean('withEllipsis', true)}
    >
      An ellipsed text here
    </TextEllipsed>
  ));
