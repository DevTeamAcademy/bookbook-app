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

export const SignInPage = props => {
  return <Flex data-testid={C.TEST_ID_SIGNIN_PAGE}>signin page here</Flex>;
};

export default SignInPage;

SignInPage.propTypes = {};

SignInPage.displayName = 'SignInPage';
