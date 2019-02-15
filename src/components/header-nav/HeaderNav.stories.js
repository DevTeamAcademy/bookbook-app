import React, { Fragment } from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, color, number, boolean } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import JSXAddon from 'storybook-addon-jsx';
// components
import HeaderNav from './';
// constants
import * as C from '../../constants';
// ////////////////////////////////////////////////////////////////////////////////////////////////////

// it('HeaderNav should render', () => {
//   const { getByTestId } = renderWithRouter(
//     <HeaderNav
//       location={{...location}}
//       handleToggleMenu={jest.fn()}
//       handleClickNavItem={jest.fn()} />,
//     { route: C.ROUTE_HOME_PAGE },
//   );
//   expect(getByTestId(C.TEST_ID_HEADER_NAV)).toBeInTheDocument();
// });

// NOTE: set to use 'addWithJSX' instead of 'add'
setAddon(JSXAddon);

const location = { pathname: C.ROUTE_HOME_PAGE };

storiesOf('HeaderNav', module)
  .addDecorator(story => <div>{story()}</div>)
  .addDecorator(withInfo)
  .addDecorator(withKnobs);
// .addWithJSX('HeaderNav -> default', () => (
//   <HeaderNav
//     location={{...location}}
//     handleToggleMenu={action('handleToggleMenu')}
//     handleClickNavItem={action('handleClickNavItem')} />
// ));
