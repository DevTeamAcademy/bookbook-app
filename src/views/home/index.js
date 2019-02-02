import React from 'react';
import PropTypes from 'prop-types';
// constants
import * as C from '../../constants';
// ui
import { Flex } from '../../ui';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export const HomeList = props => <Flex data-testid={C.TEST_ID_HOME_LIST}>Home List Here</Flex>;

export default HomeList;

HomeList.propTypes = {};

HomeList.displayName = 'HomeList';
