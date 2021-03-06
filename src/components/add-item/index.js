import R from 'ramda';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { withRouter } from 'react-router';
// components
import TextEllipsed from '../text-ellipsed';
// constants
import * as C from '../../constants';
// helpers
import * as H from '../../helpers';
// prop-types
import * as PT from '../../prop-types';
// icons
import * as I from '../../icons';
// settings
import settings from './settings';
// theme
import Theme from '../../theme';
// ui
import { Flex, PositionedBox, AnimatedPositionBox } from '../../ui';
/////////////////////////////////////////////////////////////////////////////

const getActionString = (actionName, itemName) =>
  `${H.getLocale(`actions.${actionName}`)} ${H.getLocale(`addItems.${itemName}`)}`;

// TODO: add actions
const itemList = props => [
  {
    width: 21,
    icon: I.Book,
    text: getActionString('add', 'book'),
    action: () => props.history.push(C.ROUTE_CREATE_BOOK_PAGE),
  },
  {
    width: 26,
    icon: I.Library,
    text: getActionString('add', 'library'),
    action: () => props.history.push(C.ROUTE_CREATE_LIBRARY_PAGE),
  },
  {
    width: 24,
    icon: I.Quote,
    text: getActionString('add', 'quote'),
    action: () => props.history.push(C.ROUTE_CREATE_QUOTE_PAGE),
  },
];

const pathToSettings = (itemType, settingsType) =>
  R.pathOr(settings().default[itemType], [settingsType, itemType], settings());

export const AddItemComponent = props => (
  <Flex {...pathToSettings('commonWrapper', props.settingsType)}>
    {H.isNotNilAndNotEmpty(props.text) && (
      <TextEllipsed title={props.text} {...pathToSettings('commonText', props.settingsType)}>
        {props.text}
      </TextEllipsed>
    )}
    {H.isNotNilAndNotEmpty(props.icon) && (
      <Flex onClick={props.action} {...pathToSettings('commonIcon', props.settingsType)}>
        <I.IconWrapper>
          <props.icon height={26} width={props.width} color={Theme.colors.darkGrey} />
        </I.IconWrapper>
      </Flex>
    )}
  </Flex>
);

export const AddItemsList = props => {
  const [animationName, setAnimationName] = useState('default');
  const handleToggleAnimatedActionList = () => {
    if (H.isTrue(props.isActionListOpened)) {
      setAnimationName('fade-out');
      setTimeout(() => props.toggleActionList(false), 600);
    } else {
      setAnimationName('fade-in');
      props.toggleActionList(true);
    }
  };
  return (
    <>
      <PositionedBox right='15px' bottom='15px' position='fixed'>
        <I.IconWrapper
          p='20px'
          pb='15px'
          borderRadius='50%'
          bg={Theme.colors.lightBlue}
          onClick={handleToggleAnimatedActionList}
        >
          <I.Add width={20} height={20} color={Theme.colors.white} />
        </I.IconWrapper>
      </PositionedBox>
      {props.isActionListOpened && (
        <AnimatedPositionBox
          right='15px'
          bottom='80px'
          position='fixed'
          animationName={animationName}
          isActionListOpened={props.isActionListOpened}
          animationProps='0.6s cubic-bezier(.77,0.000,.175,1.000) both'
        >
          <Flex width='max-content' flexDirection='column'>
            {itemList(props).map((item, index) => (
              <AddItemComponent {...item} key={index} settingsType='default' />
            ))}
          </Flex>
        </AnimatedPositionBox>
      )}
    </>
  );
};

export default withRouter(AddItemsList);

AddItemsList.propTypes = {
  ...PT.withRouterPropTypes,
  toggleActionList: PropTypes.func.isRequired,
  isActionListOpened: PropTypes.bool.isRequired,
};

AddItemsList.displayName = 'AddItemsList';
