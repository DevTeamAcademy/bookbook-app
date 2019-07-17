import R from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// constants
import * as C from '../../constants';
// helpers
import * as H from '../../helpers';
// icons
import { Menu, List, Quote, Notify, Search, Library, IconWrapper } from '../../icons';
// theme
import Theme from '../../theme';
// ui
import { Flex, Text } from '../../ui';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export const Wrapper = styled.div`
  width: 250px;
  height: 500px;
  position: fixed;
  top: ${({ sidebarOpened }) => H.ifElse(sidebarOpened, '40px', '-540px')};
`;

const navItemMenu = {
  icon: Menu,
  label: ['headerNavLabels', 'menu'],
};

// TODO: with proper routes
const navItems = [
  {
    icon: List,
    label: ['headerNavLabels', 'list'],
    route: C.ROUTE_HOME_PAGE,
  },
  {
    icon: Library,
    label: ['headerNavLabels', 'library'],
    route: C.ROUTE_HOME_PAGE,
  },
  {
    icon: Quote,
    label: ['headerNavLabels', 'quotes'],
    route: C.ROUTE_HOME_PAGE,
  },
  {
    icon: Notify,
    label: ['headerNavLabels', 'notify'],
    route: C.ROUTE_HOME_PAGE,
  },
  {
    icon: Search,
    label: ['headerNavLabels', 'search'],
    route: C.ROUTE_HOME_PAGE,
  },
];

const SidebarMenuItem = props => (
  <Flex
    px={15}
    height={40}
    alignItems='center'
    justifyContent='start'
    onClick={props.handleClickNavItem}
    bg={H.ifElse(props.active, Theme.colors.lightGrey, Theme.colors.darkGrey)}
  >
    <IconWrapper opacity={0.9}>
      <props.item.icon color={H.ifElse(props.active, Theme.icons.activeColor, Theme.colors.white)} />
    </IconWrapper>
    <Text color={Theme.colors.white} ml={15} fontSize={[12, 14, 14]}>
      {H.getLocale(props.item.label, props.locale)}
    </Text>
  </Flex>
);

const setItemActiveStatus = (location, item) => R.equals(location.pathname, item.route);

export const SidebarMenu = props => (
  <Wrapper sidebarOpened={props.sidebarOpened}>
    <Flex flexDirection='column'>
      {navItems.map((item, index) => (
        <Link to={item.route} key={index}>
          <SidebarMenuItem item={item} locale={props.locale} active={setItemActiveStatus(props.location, item)} />
        </Link>
      ))}
    </Flex>
  </Wrapper>
);

export default SidebarMenu;

SidebarMenu.propTypes = {
  locale: PropTypes.object,
  location: PropTypes.object,
  sidebarOpened: PropTypes.bool.isRequired,
};

SidebarMenu.displayName = 'SidebarMenu';
