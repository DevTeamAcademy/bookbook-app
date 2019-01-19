import React from 'react';
import PropTypes from 'prop-types';
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

export const NavItem = props => (
  <Flex
    width={37}
    height={35}
    bg={H.ifElse(props.item.active, '#615d60', '#363135')}
    alignItems='center'
    justifyContent='center'
  >
    <IconWrapper opacity='0.9'>
      <props.item.icon color={H.ifElse(props.item.active, '#e6dda6', '#ffffff')} />
    </IconWrapper>
  </Flex>
);

export const HeaderNav = props => (
  <Flex>
    {getNavItems(props).map(item => (
      <NavItem item={item} onClick={props.handleClickNavItem} />
    ))}
  </Flex>
);

export default HeaderNav;

HeaderNav.propTypes = {
  handleClickNavItem: PropTypes.func.isRequired,
};

HeaderNav.displayName = 'HeaderNav';
