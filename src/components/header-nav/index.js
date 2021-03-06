import R from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// constants
import * as C from '../../constants';
// helpers
import * as H from '../../helpers';
// icons
import * as I from '../../icons';
// theme
import Theme from '../../theme';
// ui
import { Box, Flex, Text } from '../../ui';
// //////////////////////////////////////////////////

const navItemMenu = {
  icon: I.Menu,
  label: 'headerNavLabels.menu',
};

const navItems = [
  {
    icon: I.List,
    route: C.ROUTE_HOME_PAGE,
    label: 'headerNavLabels.list',
  },
  {
    icon: I.Library,
    route: C.ROUTE_LIBRARY_PAGE,
    label: 'headerNavLabels.library',
  },
  {
    icon: I.Quote,
    route: C.ROUTE_QUOTES_PAGE,
    label: 'headerNavLabels.quotes',
  },
  {
    icon: I.Notify,
    route: C.ROUTE_NOTIFICATIONS_PAGE,
    label: 'headerNavLabels.notify',
  },
  {
    icon: I.Search,
    route: C.ROUTE_SEARCH_PAGE,
    label: 'headerNavLabels.search',
  },
];

const HeaderNavItem = props => (
  <Flex
    height={40}
    width={props.width}
    alignItems='center'
    justifyContent='center'
    flexDirection={['column', 'row', 'row']}
    bg={H.ifElse(props.active, Theme.colors.lightGrey, Theme.colors.darkGrey)}
  >
    <I.IconWrapper opacity={0.9}>
      <props.item.icon color={H.ifElse(props.active, Theme.icons.activeColor, Theme.colors.white)} />
    </I.IconWrapper>
    <Text color={Theme.colors.white} ml={[0, 10, 10]} fontSize={[9, 10, 12]}>
      {H.getLocale(props.item.label)}
    </Text>
  </Flex>
);

const setItemActiveStatus = (location, item) => R.equals(location.pathname, item.route);

export const HeaderNav = props => (
  <Flex>
    <Box width='16.66%' onClick={props.handleToggleSidebar}>
      <HeaderNavItem item={navItemMenu} locale={props.locale} active={props.sidebarOpened} />
    </Box>
    {navItems.map((item, index) => (
      <Box width='16.66%' key={index}>
        <Link to={item.route}>
          <HeaderNavItem item={item} locale={props.locale} active={setItemActiveStatus(props.location, item)} />
        </Link>
      </Box>
    ))}
  </Flex>
);

export default HeaderNav;

HeaderNav.propTypes = {
  location: PropTypes.object.isRequired,
  sidebarOpened: PropTypes.bool.isRequired,
  handleToggleSidebar: PropTypes.func.isRequired,
};

HeaderNav.displayName = 'HeaderNav';
