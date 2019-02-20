import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// constants
import * as C from '../../constants';
// contexts
import { LocaleContext } from '../../contexts/locale';
// helpers
import { getLocale } from '../../helpers';
// ui
import { Flex } from '../../ui';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export const SignUpPage = props => {
  return <Flex data-testid={C.TEST_ID_SIGNUP_PAGE}>signup page here</Flex>;
};

export default SignUpPage;

SignUpPage.propTypes = {};

SignUpPage.displayName = 'SignUpPage';
