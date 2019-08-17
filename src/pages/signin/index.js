import { Formik } from 'formik';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { withRouter } from 'react-router';
// components
import { RouteLink, FormFields } from '../../components';
// constants
import * as C from '../../constants';
// global-state
import { setCurrentUser } from '../../global-state/dispatchers';
// helpers
import * as H from '../../helpers';
// hooks
import { useRequest } from '../../hooks';
// images
import { ReactComponent as LogoIcon } from '../../images/logo.svg';
// theme
import Theme from '../../theme';
// ui
import { Box, Flex, Button, AuthPagesWrapper } from '../../ui';
// /////////////////////////////////////////////////////////////////////////////////////////////////

const signInFormSettings = {
  wrapperStyles: {
    flexDirection: 'column',
  },
  fields: [
    {
      input: {
        ...Theme.form.input.authPages,
        type: 'text',
        required: true,
        name: C.USER.USERNAME,
        placeholder: 'labels.login',
      },
    },
    {
      input: {
        ...Theme.form.input.authPages,
        type: 'password',
        required: true,
        name: C.USER.PASSWORD,
        placeholder: 'labels.email',
      },
    },
  ],
};

const SignInForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <FormFields {...props} settings={signInFormSettings} />
      <Box>
        <RouteLink
          linkTo={C.ROUTE_PASSWORD_FORGOT_PAGE}
          text={H.getLocale('actions.forgotPassword')}
          styles={{ fontSize: '12px', fontFamily: 'AvenirNext', color: '#fff8f0' }} // TODO Move to Theme
        />
      </Box>
      <Button type='submit' {...Theme.btns.authPages}>
        {H.getLocale('actions.login')}
      </Button>
    </form>
  );
};

export const SignInPage = props => {
  const { history } = props;
  const request = useRequest(C.AUTH_OPTIONS);
  async function sendLoginData(body) {
    const data = await request.post(C.ENDP_SIGNIN, body);
    if (H.hasNotResponseErrors(data)) {
      setCurrentUser(data);
      H.showToast('success', 'messages.successLogin');
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
          onSubmit={(values, { setSubmitting }) => {
            const { username, password } = values;
            const body = new FormData(values);
            body.append('username', username);
            body.append('password', password);
            body.append('grant_type', 'password');
            sendLoginData(body);
          }}
          render={props => <SignInForm {...props} />}
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
