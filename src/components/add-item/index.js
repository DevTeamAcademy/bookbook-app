import R from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
//components
import TextEllipsed from '../text-ellipsed';
// helpers
import * as H from '../../helpers';
// icons
import * as I from '../../icons';
// settings
import settings from './settings';
// ui
import { Flex, AbsoluteWrapper } from '../../ui';
/////////////////////////////////////////////////////////////////////////////

const getActionString = (actionName, itemName) =>
  `${H.getLocale(`actions.${actionName}`)} ${H.getLocale(`addItems.${itemName}`)}`;

const itemList = props => [
  {
    icon: I.Book,
    width: 21,
    text: getActionString('add', 'book'),
    action: () => console.log(getActionString('add', 'book')),
  },
  {
    width: 26,
    icon: I.Library,
    text: getActionString('add', 'library'),
    action: () => console.log(getActionString('add', 'library')),
  },
  {
    width: 24,
    icon: I.Quote,
    text: getActionString('add', 'quote'),
    action: () => console.log(getActionString('add', 'quote')),
  },
];

const pathToSettings = (itemType, settingsType) =>
  R.pathOr(settings().default[itemType], [settingsType, itemType], settings());

export const AddItemComponent = props => (
  <Flex {...pathToSettings('wrapper', props.settingsType)}>
    {H.isNotNilAndNotEmpty(props.text) && (
      <TextEllipsed title={props.text} {...pathToSettings('text', props.settingsType)}>
        {props.text}
      </TextEllipsed>
    )}
    {H.isNotNilAndNotEmpty(props.icon) && (
      <Flex onClick={props.action} {...pathToSettings('icon', props.settingsType)}>
        <I.IconWrapper>
          <props.icon width={props.width} height={26} color='#363135' />
        </I.IconWrapper>
      </Flex>
    )}
  </Flex>
);

export const AddItemsList = props => {
  return (
    <Flex justifyContent='flex-end' alignItems='flex-end'>
      <Flex
        width='60px'
        height='60px'
        borderRadius='50%'
        alignItems='center'
        position='relative'
        background='#6fa6d6'
        justifyContent='center'
        style={{ cursor: 'pointer' }}
        onClick={() => props.toggleAddItemsListOpened(R.not(props.isAddListItemsOpened))}
      >
        <I.IconWrapper>
          <I.Add width={20} height={20} color='white' />
        </I.IconWrapper>
      </Flex>
      {props.isAddListItemsOpened && (
        <AbsoluteWrapper bottom='140px'>
          <Flex flexDirection='column' width='240px'>
            {itemList(props).map((item, index) => (
              <AddItemComponent {...item} key={index} />
            ))}
          </Flex>
        </AbsoluteWrapper>
      )}
    </Flex>
  );
};

export default AddItemsList;

AddItemsList.propTypes = {
  isAddListItemsOpened: PropTypes.bool.isRequired,
  toggleAddItemsListOpened: PropTypes.func.isRequired,
};

AddItemsList.displayName = 'AddItemsList';
