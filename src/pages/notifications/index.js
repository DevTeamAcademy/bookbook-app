import React from 'react';
import PropTypes from 'prop-types';
// constants
import * as C from '../../constants';
// ui
import { Flex } from '../../ui';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export const NotificationsPage = props => {
  return <Flex data-testid={C.TEST_ID_NOTIFICATIONS_PAGE}>notifications page here</Flex>;
};

export default NotificationsPage;

NotificationsPage.propTypes = {};

NotificationsPage.displayName = 'NotificationsPage';
