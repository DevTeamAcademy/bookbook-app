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
import { Help, About, Share, Logout, Profile, Language, Settings, IconWrapper } from '../../icons';
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

const navItems = [
  {
    icon: Profile,
    label: ['sidebarMenuLabels', 'profile'],
    route: C.ROUTE_PROFILE_PAGE,
  },
  {
    icon: Share,
    label: ['sidebarMenuLabels', 'share'],
    route: C.ROUTE_SHARE_PAGE,
  },
  {
    icon: Help,
    label: ['sidebarMenuLabels', 'help'],
    route: C.ROUTE_HELP_PAGE,
  },
  {
    icon: About,
    label: ['sidebarMenuLabels', 'about'],
    route: C.ROUTE_ABOUT_PAGE,
  },
  {
    icon: Language,
    label: ['sidebarMenuLabels', 'language'],
    route: C.ROUTE_LANGUAGE_PAGE,
  },
  {
    icon: Settings,
    label: ['sidebarMenuLabels', 'settings'],
    route: C.ROUTE_SETTINGS_PAGE,
  },
  {
    icon: Logout,
    label: ['sidebarMenuLabels', 'logout'],
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
        <Link to={item.route} key={index} onClick={props.handleToggleSidebar}>
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
  handleToggleSidebar: PropTypes.func.isRequired,
};

SidebarMenu.displayName = 'SidebarMenu';
