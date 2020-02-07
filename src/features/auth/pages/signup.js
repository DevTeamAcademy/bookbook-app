import { Formik } from 'formik';
import React, { useState } from 'react';
import { useFirebase } from 'react-redux-firebase';
// components
import { RouteLink, FormFields, LoadingWrapper } from '../../../components';
// constants
import * as C from '../../../constants';
// helpers
import * as H from '../../../helpers';
// images
import { ReactComponent as LogoIcon } from '../../../images/logo.svg';
// prop-types
import * as PT from '../../../prop-types';
// theme
import Theme from '../../../theme';
// ui
import { Box, Flex, Text, Button, AuthPagesWrapper } from '../../../ui';
// /////////////////////////////////////////////////////////////////////////////////////////////////

const signUpFormSettings = {
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
        placeholder: 'labels.username',
        name: C.USER_FIELDS.FIELD_USERNAME,
      },
    },
    {
      type: 'input',
      input: {
        ...Theme.form.input.authPages,
        type: 'email',
        required: true,
        placeholder: 'labels.email',
        name: C.USER_FIELDS.FIELD_EMAIL,
      },
    },
    {
      type: 'input',
      input: {
        ...Theme.form.input.authPages,
        type: 'password',
        required: true,
        placeholder: 'labels.password',
        name: C.USER_FIELDS.FIELD_PASSWORD,
      },
    },
  ],
};

const SignUpForm = props => {
  const { loading, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <FormFields {...props} settings={signUpFormSettings} />
      <Button type='submit' disabled={loading} {...Theme.btns.authPages}>
        {H.getLocale('actions.register')}
      </Button>
    </form>
  );
};

// TODO: with correct redirection terms and policy
export const SignUpPage = props => {
  const { history } = props;

  const [isLoading, setLoading] = useState(false);

  const firebase = useFirebase();

  async function loginUser(data) {
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

  async function sendSignupData(data) {
    setLoading(true);
    const { email, password, username } = data;
    await firebase
      .createUser({ email, password }, { username, email })
      .then(res => {
        if (res.username) {
          H.showToast('success', 'messages.successRegister');
          loginUser(data);
          // history.push(C.ROUTE_SIGNIN_PAGE);
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
          onSubmit={values => sendSignupData(values)}
          render={props => (
            <LoadingWrapper loading={isLoading}>
              <SignUpForm loading={isLoading} {...props} />
            </LoadingWrapper>
          )}
        />
        <Box mt='50px'>
          <RouteLink linkTo='/' text={H.getLocale('termsAndConditions')} />
          <RouteLink linkTo='/' text={H.getLocale('privacyPolicy')} />
        </Box>
        <Box>
          <Text color='white' fontSize='10px'>
            {H.getLocale('copyright')}
          </Text>
        </Box>
      </Flex>
    </AuthPagesWrapper>
  );
};

export default SignUpPage;

SignUpPage.propTypes = PT.withRouterPropTypes;

SignUpPage.displayName = 'SignUpPage';
