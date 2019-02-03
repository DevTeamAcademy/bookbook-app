import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { equals } from 'ramda';
// constants
import * as C from '../../constants';
// helpers
import * as H from '../../helpers';
// icons
import { Menu, List, Quote, Notify, Search, Library, IconWrapper } from '../../icons';
// ui
import { Flex } from '../../ui';
// /////////////////////////////////////////////////////////////////////////////////////////////////

// TODO: with locale and handle menu item

export const navItemMenu = {
  icon: Menu,
  label: 'Meню',
};

export const getNavItems = props => [
  {
    icon: List,
    label: 'Список',
    route: C.ROUTE_HOME_LIST,
  },
  {
    icon: Library,
    label: 'Бібліотека',
    route: C.ROUTE_LIBRARY,
  },
  {
    icon: Quote,
    label: 'Цитати',
    route: C.ROUTE_QUOTES,
  },
  {
    icon: Notify,
    label: 'Сповіщення',
    route: C.ROUTE_NOTIFICATIONS,
  },
  {
    icon: Search,
    label: 'Пошук',
    route: C.ROUTE_SEARCH,
  },
];

export const HeaderNavItem = props => (
  <Flex
    width={37}
    height={35}
    alignItems='center'
    justifyContent='center'
    data-testid={C.TEST_ID_HEADER_NAV_ITEM}
    bg={H.ifElse(props.active, '#615d60', '#363135')}
  >
    <IconWrapper opacity={0.9}>
      <props.item.icon color={H.ifElse(props.active, '#e6dda6', '#ffffff')} />
    </IconWrapper>
  </Flex>
);

export const setItemActiveStatus = (location, item) => equals(location.pathname, item.route);

function HeaderNav(props) {
  return (
    <Flex data-testid={C.TEST_ID_HEADER_NAV}>
      <HeaderNavItem active={false} item={navItemMenu} onClick={props.handleToggleMenu} />
      {getNavItems(props).map((item, index) => (
        <Link to={item.route}>
          <HeaderNavItem
            item={item}
            key={index}
            onClick={props.handleClickNavItem}
            active={setItemActiveStatus(props.location, item)}
          />
        </Link>
      ))}
    </Flex>
  );
}

export default HeaderNav;

HeaderNav.propTypes = {
  handleClickNavItem: PropTypes.func.isRequired,
};

HeaderNav.displayName = 'HeaderNav';
