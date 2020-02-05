import React from 'react';
import PropTypes from 'prop-types';
// components
import NotificationItemComponent from '../components/notification-item';
// ui
import { PageWrapper } from '../../../ui';
// ////////////////////////////////////////////////////////////////////////////////

// TODO: with locale
const notificationList = [
  {
    firstName: 'Dima',
    lastName: 'BODLEV',
    notificationDate: '21/12/2018',
    notificationIconType: 'comment',
    notificationText: 'Підтвердив ваш запит на букерство',
  },
  {
    firstName: 'Dima',
    lastName: 'BODLEV',
    notificationIconType: 'add',
    notificationDate: '21/12/2018',
    notificationText: 'Підтвердив ваш запит на букерство',
    notificationFooterActions: [
      {
        buttonType: 'accept',
        buttonText: 'Accept',
      },
      {
        buttonType: 'decline',
        buttonText: 'Decline',
      },
    ],
  },
];

export const NotificationsPage = () => (
  <PageWrapper>
    {notificationList.map((item, index) => (
      <NotificationItemComponent {...item} key={index} index={index} />
    ))}
  </PageWrapper>
);

export default NotificationsPage;

NotificationsPage.propTypes = {};

NotificationsPage.displayName = 'NotificationsPage';
