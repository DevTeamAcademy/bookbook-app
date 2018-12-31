import React, { Fragment } from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import { withKnobs, text, color, number } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import JSXAddon from 'storybook-addon-jsx';
// icons
import {
  Trash,
  IconWrapper } from './';
// ////////////////////////////////////////////////////////////////////////////////////////////////////

// NOTE: set to use 'addWithJSX' instead of 'add'
setAddon(JSXAddon);

const IconsList = () => (
  <Fragment>
    Trash: <Trash /> 
  </Fragment>
);

storiesOf('Full Icons List', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .addDecorator(withInfo)
  .add('List', () => <IconsList />)

storiesOf('Icon Details', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .addWithJSX('Trash -> default', () => <Trash />)
  .addWithJSX('Trash -> with props', () => (
    <Trash
      width={number('width', 25)}
      height={number('height', 25)}
      color={color('color', 'blue')} />
  ))

// This will lead to { onClick: action('clicked'), ... }
const iconWrapperEvents = actions({ onClick: 'clicked' });

storiesOf('Icon Wrapper', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .addWithJSX('IconWrapper with Trash icon', () => (
    <IconWrapper
      opacity={number('opacity', 0.8)}
      cursor={text('cursor', 'pointer')}
      display={text('display', 'inline-block')}
    >
      <Trash />
    </IconWrapper>
  ))
  .add('IconWrapper -> with events', () => <IconWrapper {...iconWrapperEvents} />)
