import React, { Fragment } from 'react';
import { withRouter } from 'react-router';
import JSXAddon from 'storybook-addon-jsx';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, color, number, boolean } from '@storybook/addon-knobs/react';
// constants
import * as C from '../../constants';
// ////////////////////////////////////////////////////////////////////////////////////////////////////

const location = { pathname: C.ROUTE_HOME_PAGE };

storiesOf('HeaderNav', module)
  .addDecorator(story => <div>{story()}</div>)
  .addDecorator(withInfo)
  .addDecorator(withKnobs);
