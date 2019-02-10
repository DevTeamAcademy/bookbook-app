import React from 'react';
import PropTypes from 'prop-types';
// constants
import * as C from '../../constants';
// helpers
import * as H from '../../helpers';
// icons
import { Menu, List, Quote, Notify, Search, Library, IconWrapper } from '../../icons';
// ui
import { Flex } from '../../ui';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export const getNavItems = props => [
  {
    icon: Menu,
    label: 'Meню',
    active: true,
  },
  {
    icon: List,
    label: 'Список',
  },
  {
    icon: Library,
    label: 'Бібліотека',
  },
  {
    icon: Quote,
    label: 'Цитати',
  },
  {
    icon: Notify,
    label: 'Сповіщення',
  },
  {
    icon: Search,
    label: 'Пошук',
  },
];

export const HeaderNavItem = props => (
  <Flex
    width={37}
    height={35}
    alignItems='center'
    justifyContent='center'
    onClick={props.handleClickNavItem}
    data-testid={C.TEST_ID_HEADER_NAV_ITEM}
    bg={H.ifElse(props.item.active, '#615d60', '#363135')}
  >
    <IconWrapper opacity={0.9}>
      <props.item.icon color={H.ifElse(props.item.active, '#e6dda6', '#ffffff')} />
    </IconWrapper>
  </Flex>
);

export const HeaderNav = props => (
  <Flex data-testid={C.TEST_ID_HEADER_NAV}>
    {getNavItems(props).map((item, index) => (
      <HeaderNavItem item={item} key={index} handleClickNavItem={props.handleClickNavItem} />
    ))}
  </Flex>
);

export default HeaderNav;

HeaderNav.propTypes = {
  handleClickNavItem: PropTypes.func.isRequired,
};

HeaderNav.displayName = 'HeaderNav';
