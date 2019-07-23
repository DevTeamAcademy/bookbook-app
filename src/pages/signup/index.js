import { Formik } from 'formik';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
// components
import { RouteLink, FormFields } from '../../components';
// constants
import * as C from '../../constants';
// global-state
import { setCurrentUser } from '../../global-state/dispatchers';
// contexts
import { LocaleContext } from '../../contexts/locale';
// helpers
import * as H from '../../helpers';
// hooks
import { useRequest } from '../../hooks';
// images
import { ReactComponent as LogoIcon } from '../../images/logo.svg';
// theme
import Theme from '../../theme';
// ui
import { Box, Flex, Text, Button, AuthPagesWrapper } from '../../ui';
// /////////////////////////////////////////////////////////////////////////////////////////////////

const signUpFormSettings = {
  wrapperStyles: {
    flexDirection: 'column',
  },
  fields: [
    {
      input: {
        ...Theme.form.input.authPages,
        type: 'text',
        required: true,
        name: C.USER.LOGIN,
        placeholder: ['labels', 'login'],
      },
    },
    {
      input: {
        ...Theme.form.input.authPages,
        type: 'email',
        required: true,
        name: C.USER.EMAIL,
        placeholder: ['labels', 'email'],
      },
    },
    {
      input: {
        ...Theme.form.input.authPages,
        type: 'password',
        required: true,
        name: C.USER.PASSWORD,
        placeholder: ['labels', 'password'],
      },
    },
  ],
};

const SignUpForm = props => {
  const { locale, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <FormFields {...props} locale={locale} settings={signUpFormSettings} />
      <Button type='submit' {...Theme.btns.authPages}>
        {H.getLocale(['actions', 'register'], locale)}
      </Button>
    </form>
  );
};

// TODO: with correct redirection terms and policy
export const SignUpPage = props => {
  const { history } = props;
  const { locale } = useContext(LocaleContext);
  const request = useRequest(C.AUTH_OPTIONS);
  async function sendSignupData(body) {
    const data = await request.post(C.ENDP_SIGNUP, body);
    // TODO: check 200 with validate errors or without user response
    if (H.hasNotResponseErrors(data)) {
      setCurrentUser(data);
      H.showToast('success', 'Success Register!');
      history.push(C.ROUTE_HOME_PAGE);
    }
  }
  return (
    <AuthPagesWrapper>
      <Flex height='100%' alignItems='center' flexDirection='column' justifyContent='center'>
        <Box mb='50px'>
          <LogoIcon />
        </Box>
        <Formik
          onSubmit={(values, { setSubmitting }) => sendSignupData(values)}
          render={props => <SignUpForm {...props} locale={locale} />}
        />
        <Box mt='50px'>
          <RouteLink linkTo='/' text={H.getLocale(['termsAndConditions'], locale)} />
          <RouteLink linkTo='/' text={H.getLocale(['privacyPolicy'], locale)} />
        </Box>
        <Box>
          <Text color='white' fontSize='10px'>
            {H.getLocale(['copyright'], locale)}
          </Text>
        </Box>
      </Flex>
    </AuthPagesWrapper>
  );
};

export default SignUpPage;

SignUpPage.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object,
};

SignUpPage.displayName = 'SignUpPage';
