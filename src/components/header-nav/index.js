import React from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';
import styled from 'styled-components';
import {
  color,
  space,
  width,
  border,
  display,
  fontSize,
  maxWidth,
  minWidth,
  maxHeight,
  minHeight,
  textAlign,
  boxShadow,
  fontWeight,
  borderLeft,
  borderColor,
  borderRight,
  borderBottom,
  borderRadius,
} from 'styled-system';
// global
import * as H from '../../helpers';
// icons
import { List, Quote, Notify, Search, Library, IconWrapper } from '../../icons';
// ui
import { Flex } from '../../ui';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export const Nav = styled.nav``;

export const NavItem = () => (
  <Flex width={35} height={35} bg='#363135' alignItems='center' justifyContent='center'>
    <IconWrapper>
      <List color='#e6dda6' />
    </IconWrapper>
  </Flex>
);

export const NavItemInactive = () => (
  <Flex width={35} height={35} bg='#615d60' alignItems='center' justifyContent='center'>
    <IconWrapper>
      <Library color='#ffffff' />
    </IconWrapper>
  </Flex>
);

export const HeaderNav = props => (
  <Flex>
    <NavItem onClick={() => props.handleClickNavItem()} />
    <NavItemInactive onClick={() => props.handleClickNavItem()} />
  </Flex>
);

export default HeaderNav;

HeaderNav.propTypes = {
  handleClickNavItem: PropTypes.func.isRequired,
};

HeaderNav.displayName = 'HeaderNav';
