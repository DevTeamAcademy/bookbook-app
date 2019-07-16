import R from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// constants
import * as C from '../../constants';
// helpers
import * as H from '../../helpers';
// theme
import Theme from '../../theme';
// ui
import { Text } from '../../ui';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export const RouteLink = props => (
  <Link to={R.or(props.linkTo, C.ROUTE_HOME_PAGE)}>
    <Text hoverTextDecoration='underline' {...Theme.routeLink} {...H.spreadUiProps(props.styles)}>
      {props.text}
    </Text>
  </Link>
);

export default RouteLink;

RouteLink.propTypes = {
  styles: PropTypes.object,
  text: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
};

RouteLink.displayName = 'RouteLink';
