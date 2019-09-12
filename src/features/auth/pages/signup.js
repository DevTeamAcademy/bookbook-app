import React from 'react';
import { Formik } from 'formik';
import useAxios from 'axios-hooks';
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
        name: C.USER_FIELDS.FIELD_LOGIN,
        placeholder: 'labels.login',
      },
    },
    {
      type: 'input',
      input: {
        ...Theme.form.input.authPages,
        type: 'email',
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
  const [{ data, loading, error, response }, executeRequest] = useAxios(
    {
      method: 'POST',
      url: H.makeRequestUrl(C.ENDP_SIGNUP),
    },
    { manual: true },
  );
  function sendSignupData(data) {
    executeRequest({ data });
  }
  if (error) {
    H.showResponseError(error);
  }
  if (H.isResponseSuccess(response)) {
    H.showToast('success', 'messages.successRegister');
    history.push(C.ROUTE_SIGNIN_PAGE);
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
            <LoadingWrapper loading={loading}>
              <SignUpForm loading={loading} {...props} />
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
