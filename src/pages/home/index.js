import React from 'react';
import PropTypes from 'prop-types';
// constants
import * as C from '../../constants';
// ui
import { Flex } from '../../ui';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export const HomePage = props => {
  return <Flex data-testid={C.TEST_ID_HOME_PAGE}>home page here</Flex>;
};

export default HomePage;

HomePage.propTypes = {};

HomePage.displayName = 'HomePages';
