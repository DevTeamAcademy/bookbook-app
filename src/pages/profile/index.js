import React from 'react';
import PropTypes from 'prop-types';
// constants
import * as C from '../../constants';
// ui
import { Flex } from '../../ui';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export const ProfilePage = props => {
  return <Flex data-testid={C.TEST_ID_PROFILE_PAGE}>profile page here</Flex>;
};

export default ProfilePage;

ProfilePage.propTypes = {};

ProfilePage.displayName = 'ProfilePage';
