import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import useAxios from 'axios-hooks';
import Loading from 'react-loading-bar';
import { withRouter } from 'react-router';
// components
import { RouteLink, FormFields, LoadingWrapper } from '../../../components';
// constants
import * as C from '../../../constants';
// global-state
import { setCurrentUser } from '../../../global-state/dispatchers';
// helpers
import * as H from '../../../helpers';
// images
import { ReactComponent as LogoIcon } from '../../../images/logo.svg';
// theme
import Theme from '../../../theme';
// ui
import { Box, Flex, Button, AuthPagesWrapper } from '../../../ui';
// /////////////////////////////////////////////////////////////////////////////////////////////////

const signInFormSettings = {
  wrapperStyles: {
    flexDirection: 'column',
  },
  fields: [
    {
      type: 'input',
      input: {
        ...Theme.form.input.authPages,
        type: 'text',
        required: true,
        name: C.USER_FIELDS.FIELD_USERNAME,
        placeholder: 'labels.loginOrEmail',
      },
    },
    {
      type: 'input',
      input: {
        ...Theme.form.input.authPages,
        type: 'password',
        required: true,
        name: C.USER_FIELDS.FIELD_PASSWORD,
        placeholder: 'labels.password',
      },
    },
  ],
};

const SignInForm = props => {
  const { loading, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <FormFields {...props} settings={signInFormSettings} />
      <Box>
        <RouteLink
          styles={{ fontSize: '12px' }}
          linkTo={C.ROUTE_PASSWORD_FORGOT_PAGE}
          text={H.getLocale('actions.forgotPassword')}
        />
      </Box>
      <Button type='submit' disabled={loading} {...Theme.btns.authPages}>
        {H.getLocale('actions.login')}
      </Button>
    </form>
  );
};

export const SignInPage = props => {
  const { history } = props;
  const [{ data, loading, error, response }, executeRequest] = useAxios(
    {
      method: 'POST',
      url: H.makeRequestUrl(C.ENDP_SIGNIN),
      headers: H.makeRequestHeaders(C.AUTH_OPTIONS.headers),
    },
    { manual: true },
  );
  function sendLoginData(values) {
    const { username, password } = values;
    const data = H.qsStringify({
      grant_type: 'password',
      username,
      password,
    });
    executeRequest({ data });
  }
  if (error) {
    H.showResponseError(error);
  }
  if (H.isResponseSuccess(response)) {
    setCurrentUser(data);
    H.showToast('success', 'messages.successLogin');
    history.push(C.ROUTE_HOME_PAGE);
  }

  return (
    <AuthPagesWrapper>
      <Loading show={loading} color={Theme.colors.red} />
      <Flex height='100%' alignItems='center' flexDirection='column' justifyContent='center'>
        <Box mb='50px'>
          <LogoIcon />
        </Box>
        <Formik
          onSubmit={values => sendLoginData(values)}
          render={props => (
            <LoadingWrapper loading={loading}>
              <SignInForm loading={loading} {...props} />
            </LoadingWrapper>
          )}
        />
        <Box mt='50px'>
          <RouteLink
            linkTo={C.ROUTE_SIGNUP_PAGE}
            styles={{ fontSize: '14px' }}
            text={H.getLocale('actions.register')}
          />
        </Box>
      </Flex>
    </AuthPagesWrapper>
  );
};

export default withRouter(SignInPage);

SignInPage.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object,
};

SignInPage.displayName = 'SignInPage';
