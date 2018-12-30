import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import Trash from './Trash';

const IconsList = () => (
  <Fragment>
    <div>
      Trash: <Trash /> 
    </div>
  </Fragment>
);

storiesOf('Icons', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('IconsList', () => <IconsList />)
