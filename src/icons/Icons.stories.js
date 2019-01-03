import React, { Fragment } from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import { withKnobs, text, color, number } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import JSXAddon from 'storybook-addon-jsx';
// icons
import { List, Quote, Notify, Library } from './';
import { IconWrapper } from './ui';
// ////////////////////////////////////////////////////////////////////////////////////////////////////

// NOTE: set to use 'addWithJSX' instead of 'add'
setAddon(JSXAddon);

const iconsMap = {
  List,
  Quote,
  Notify,
  Library,
};

const renderIconWithProps = iconName => {
  const Component = iconsMap[iconName];
  return <Component width={number('width', 25)} height={number('height', 25)} color={color('color', '#e6dda6')} />;
};

const IconsList = () => (
  <Fragment>
    Notify: <Notify />
    List: <List />
    Quote: <Quote />
    Library: <Library />
  </Fragment>
);

storiesOf('Full Icons List', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .addDecorator(withInfo)
  .add('List', () => <IconsList />);

storiesOf('Icon Details', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .addWithJSX('Notify -> default', () => <Notify />)
  .addWithJSX('Notify -> with props', () => renderIconWithProps('Notify'))
  .addWithJSX('List -> default', () => <List />)
  .addWithJSX('List -> with props', () => renderIconWithProps('List'))
  .addWithJSX('Quote -> default', () => <Quote />)
  .addWithJSX('Quote -> with props', () => renderIconWithProps('Quote'))
  .addWithJSX('Library -> default', () => <Library />)
  .addWithJSX('Library -> with props', () => renderIconWithProps('Library'));

// This will lead to { onClick: action('clicked'), ... }
const iconWrapperEvents = actions({ onClick: 'clicked' });

storiesOf('Icon Wrapper', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .addWithJSX('IconWrapper with Notify icon', () => (
    <IconWrapper
      opacity={number('opacity', 0.8)}
      cursor={text('cursor', 'pointer')}
      display={text('display', 'inline-block')}
    >
      <Notify />
    </IconWrapper>
  ))
  .add('IconWrapper -> with events', () => <IconWrapper {...iconWrapperEvents} />);
