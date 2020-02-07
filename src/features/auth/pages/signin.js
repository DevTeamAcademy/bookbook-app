import { Formik } from 'formik';
import React, { useState } from 'react';
import { useFirebase } from 'react-redux-firebase';
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
// prop-types
import * as PT from '../../../prop-types';
// theme
import Theme from '../../../theme';
// ui
import { Box, Flex, Button, AuthPagesWrapper } from '../../../ui';
// //////////////////////////////////////////////////

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
        name: C.USER_FIELDS.FIELD_EMAIL,
        placeholder: 'labels.email',
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

  const [isLoading, setLoading] = useState(false);

  const firebase = useFirebase();

  async function sendLoginData(data) {
    setLoading(true);
    const { email, password } = data;
    await firebase
      .login({ email, password })
      .then(res => {
        if (res.user) {
          H.showToast('success', 'messages.successLogin');
          history.push(C.ROUTE_HOME_PAGE);
        }
      })
      .catch(err => {
        H.showToast('error', err.message, true);
      });
    setLoading(false);
  }

  return (
    <AuthPagesWrapper>
      <Flex height='100%' alignItems='center' flexDirection='column' justifyContent='center'>
        <Box mb='50px'>
          <LogoIcon />
        </Box>
        <Formik
          onSubmit={values => sendLoginData(values)}
          render={props => (
            <LoadingWrapper loading={isLoading}>
              <SignInForm loading={isLoading} {...props} />
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

export default SignInPage;

SignInPage.propTypes = PT.withRouterPropTypes;

SignInPage.displayName = 'SignInPage';
