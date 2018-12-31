import React, { Fragment } from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import { withKnobs, text, color, number, boolean } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import JSXAddon from 'storybook-addon-jsx';
// icons
import { TextComponent } from './';
// ////////////////////////////////////////////////////////////////////////////////////////////////////

// NOTE: set to use 'addWithJSX' instead of 'add'
setAddon(JSXAddon);

storiesOf('TextComponent', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .addWithJSX('TextComponent -> default', () => (
    <TextComponent>
      Some text here
    </TextComponent>
  ))
  .addWithJSX('TextComponent -> with props', () => (
    <TextComponent
      display={text('display', 'inline-block')}
      width={text('width', '100px')}
      height={number('height', 25)}
      color={color('color', 'blue')}
      title='An ellipsed text here'
      withEllipsis={boolean('withEllipsis', true)}
    >
      An ellipsed text here
    </TextComponent>
  ))
