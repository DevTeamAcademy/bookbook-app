import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// constants
import * as C from '../../constants';
// contexts
import { LocaleContext } from '../../contexts/locale';
// ui
import { Flex } from '../../ui';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export const HomePage = props => {
  return <Flex data-testid={C.TEST_ID_HOME_PAGE}>home page here</Flex>;
};

export default HomePage;

HomePage.propTypes = {};

HomePage.displayName = 'HomePages';
