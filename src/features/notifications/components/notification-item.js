import R from 'ramda';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
// components
import { TextEllipsed, AvatarComponent } from '../../../components';
// helpers
import * as H from '../../../helpers';
// icons
import * as I from '../../../icons';
// theme
import Theme from '../../../theme';
// ui
import { Box, Flex, Button, PositionedBox } from '../../../ui';
///////////////////////////////////////////////////////////////////////////////

const notificationIconsMap = {
  add: <I.NotificationTypeAdd width={15} height={15} color={Theme.notification.booker} />,
  comment: <I.NotificationTypeComment width={15} height={15} color={Theme.notification.message} />,
};

// TODO: with locale
const notificationMessages = {
  decline: 'Відхилив ваш запит на букерство',
  accept: 'Підтвердив ваш запит на букерство',
};

export const AvatarWithNotificationTypeComponent = props => (
  <Flex mt='5px' height='max-content' alignItems='flex-end'>
    <AvatarComponent
      width={36}
      height={36}
      borderRadius='50%'
      lastName={R.prop('lastName', props)}
      firstName={R.prop('firstName', props)}
      initialsText={Theme.avatar.initialsText}
      initialsBackground={Theme.avatar.initialsBackground}
      // TODO: with go to booker profile action
      bookerAvatarAction={() => console.log('handleClick')}
    />
    <PositionedBox top='10px' right='13px' position='relative'>
      {R.pathOr(R.prop('add', notificationIconsMap), [R.prop('notificationIconType', props)], notificationIconsMap)}
    </PositionedBox>
  </Flex>
);

export const ActionButtonComponent = props => (
  <Flex
    borderRadius='50%'
    alignItems='center'
    justifyContent='center'
    width={props.actionButtonSize}
    height={props.actionButtonSize}
    bg={props.actionButtonBackground}
  >
    <Flex width={props.dotsWrapperWidth} justifyContent='space-around'>
      {[1, 2, 3].map(item => (
        <Box key={item} borderRadius='50%' width={props.dotSize} height={props.dotSize} bg={props.dotBackground} />
      ))}
    </Flex>
  </Flex>
);

export const NotificationRightSectionComponent = props => (
  <Flex alignItems='flex-end' flexDirection='column'>
    <ActionButtonComponent
      dotSize='3px'
      dotsWrapperWidth='12px'
      actionButtonSize='30px'
      dotBackground={Theme.colors.white}
      actionButtonBackground={Theme.notification.actionButton}
    />
    <TextEllipsed mt='10px' fontSize={[10, 12, 12]} color={Theme.notification.date}>
      {R.prop('notificationDate', props)}
    </TextEllipsed>
  </Flex>
);

const getButtonType = (buttonType, disabledButtons) => H.ifElse(disabledButtons, 'disabled', buttonType);

export const NotificationFooterActionsComponent = props => (
  <Flex width='100%' mt={[10, 20, 20]} justifyContent={['space-between', 'space-around', 'space-around']}>
    {H.mapIndexed(
      (item, index) => (
        <Button
          {...R.path(
            ['btns', 'notifications', getButtonType(R.prop('buttonType', item), R.prop('disabledButtons', props))],
            Theme,
          )}
          key={index}
          disabled={R.prop('disabledButtons', props)}
          onClick={R.path(['notificationFooterActionMap', R.prop('buttonType', item)], props)}
        >
          {R.prop('buttonText', item)}
        </Button>
      ),
      R.prop('notificationFooterActions', props),
    )}
  </Flex>
);

export const NotificationInfo = props => (
  <Box mr='20px' width='100%'>
    <TextEllipsed color={Theme.notification.booker}>
      {R.prop('firstName', props)} {R.prop('lastName', props)}
    </TextEllipsed>
    <Flex justifyContent='space-between'>
      <TextEllipsed wordBreak='break-word' fontSize={[10, 12, 12]} color={Theme.notification.text}>
        {R.and(R.prop('loading', props), 'Loading...')}
        {R.and(H.isFalse(R.prop('loading', props)), R.prop('notificationFooterActionMessage', props))}
      </TextEllipsed>
    </Flex>
    {H.isNotNilAndNotEmpty(R.prop('notificationFooterActions', props)) && (
      <NotificationFooterActionsComponent
        disabledButtons={R.prop('disabledButtons', props)}
        notificationFooterActions={R.prop('notificationFooterActions', props)}
        notificationFooterActionMap={R.prop('notificationFooterActionMap', props)}
      />
    )}
  </Box>
);

export const NotificationItemComponent = props => {
  const [loading, setLoading] = useState(false);
  const [disabledButtons, setDisabledButtons] = useState(false);
  const [notificationFooterActionMessage, setNotificationFooterActionMessage] = useState(
    R.prop('notificationText', props),
  );
  const handleAcceptBooker = async () => {
    setLoading(true);
    setDisabledButtons(true);
    // TODO: with accept action
    setTimeout(() => {
      setLoading(false);
      setNotificationFooterActionMessage(R.prop('accept', notificationMessages));
    }, 2000);
  };
  const handleDeclineBooker = async () => {
    setLoading(true);
    setDisabledButtons(true);
    // TODO: with decline action
    setTimeout(() => {
      setLoading(false);
      setNotificationFooterActionMessage(R.prop('decline', notificationMessages));
    }, 2000);
  };
  const notificationFooterActionMap = {
    accept: handleAcceptBooker,
    decline: handleDeclineBooker,
  };
  return (
    <Flex
      bg={H.ifElse(
        H.isNotInteger(R.divide(R.prop('index', props), 2)),
        Theme.notification.itemBackground,
        Theme.colors.darkBlue,
      )}
    >
      <Flex p='20px' mx='auto' width='100%' maxWidth='500px'>
        <AvatarWithNotificationTypeComponent
          lastName={R.prop('lastName', props)}
          firstName={R.prop('firstName', props)}
          bookerAvatarAction={() => console.log('handleClick')}
          notificationIconType={R.prop('notificationIconType', props)}
        />
        <NotificationInfo
          loading={loading}
          disabledButtons={disabledButtons}
          lastName={R.prop('lastName', props)}
          firstName={R.prop('firstName', props)}
          notificationFooterActionMap={notificationFooterActionMap}
          notificationFooterActionMessage={notificationFooterActionMessage}
          notificationFooterActions={R.prop('notificationFooterActions', props)}
        />
        <NotificationRightSectionComponent notificationDate={R.prop('notificationDate', props)} />
      </Flex>
    </Flex>
  );
};

NotificationItemComponent.propTypes = {
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  notificationFooterActions: PropTypes.array,
  notificationDate: PropTypes.string.isRequired,
  notificationText: PropTypes.string.isRequired,
  notificationIconType: PropTypes.string.isRequired,
};

export default NotificationItemComponent;

NotificationItemComponent.displayName = 'NotificationItemComponent';
