import React from 'react';
import { equals } from 'ramda';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { themeGet } from 'styled-system';
// constants
import * as C from '../../constants';
// helpers
import * as H from '../../helpers';
// icons
import { Menu, List, Quote, Notify, Search, Library, IconWrapper } from '../../icons';
// ui
import { Box, Flex, Text } from '../../ui';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export const navItemMenu = {
  icon: Menu,
  label: ['headerNavLabels', 'menu'],
};

export const navItems = [
  {
    icon: List,
    label: ['headerNavLabels', 'list'],
    route: C.ROUTE_HOME_PAGE,
  },
  {
    icon: Library,
    label: ['headerNavLabels', 'library'],
    route: C.ROUTE_LIBRARY_PAGE,
  },
  {
    icon: Quote,
    label: ['headerNavLabels', 'quotes'],
    route: C.ROUTE_QUOTES_PAGE,
  },
  {
    icon: Notify,
    label: ['headerNavLabels', 'notify'],
    route: C.ROUTE_NOTIFICATIONS_PAGE,
  },
  {
    icon: Search,
    label: ['headerNavLabels', 'search'],
    route: C.ROUTE_SEARCH_PAGE,
  },
];

export const HeaderNavItem = props => (
  <Flex
    height={40}
    width={props.width}
    alignItems='center'
    justifyContent='center'
    onClick={props.handleClickNavItem}
    data-testid={C.TEST_ID_HEADER_NAV_ITEM}
    flexDirection={['column', 'row', 'row']}
    bg={H.ifElse(props.active, themeGet('colors.lightGrey', 'grey')(props), themeGet('colors.darkGrey', 'grey')(props))}
  >
    <IconWrapper opacity={0.9}>
      <props.item.icon
        color={H.ifElse(
          props.active,
          themeGet('icons.activeColor', 'white')(props),
          themeGet('colors.white', 'white')(props),
        )}
      />
    </IconWrapper>
    <Text color={themeGet('coors.white', 'white')(props)} ml={[0, 10, 10]} fontSize={[9, 10, 12]}>
      {H.getLocale(props.item.label, '...', props.locale)}
    </Text>
  </Flex>
);

export const setItemActiveStatus = (location, item) => equals(location.pathname, item.route);

export const HeaderNav = props => (
  <Flex data-testid={C.TEST_ID_HEADER_NAV}>
    <Box width='16.66%'>
      <HeaderNavItem
        active={false}
        item={navItemMenu}
        theme={props.theme}
        locale={props.locale}
        handleClickNavItem={props.handleToggleMenu}
      />
    </Box>
    {navItems.map((item, index) => (
      <Box width='16.66%' key={index}>
        <Link to={item.route}>
          <HeaderNavItem
            item={item}
            theme={props.theme}
            locale={props.locale}
            handleClickNavItem={props.handleClickNavItem}
            active={setItemActiveStatus(props.location, item)}
          />
        </Link>
      </Box>
    ))}
  </Flex>
);

export default HeaderNav;

HeaderNav.propTypes = {
  theme: PropTypes.object,
  locale: PropTypes.object,
  location: PropTypes.object,
  handleToggleMenu: PropTypes.func.isRequired,
};

HeaderNav.displayName = 'HeaderNav';
