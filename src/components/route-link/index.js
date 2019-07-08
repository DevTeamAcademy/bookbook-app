import React from 'react';
import { or } from 'ramda';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// constants
import * as C from '../../constants';
// helpers
import * as H from '../../helpers';
// theme
import Theme from '../../theme';
// ui
import { Box, Text } from '../../ui';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export const RouteLink = props => (
  <Link to={or(props.linkTo, C.ROUTE_HOME_PAGE)}>
    <Text hoverTextDecoration='underline' {...Theme.routeLink} {...H.spreadUiProps(props.styles)}>
      {props.text}
    </Text>
  </Link>
);

export default RouteLink;

RouteLink.propTypes = {};

RouteLink.displayName = 'HeaderRouteLinkNav';
