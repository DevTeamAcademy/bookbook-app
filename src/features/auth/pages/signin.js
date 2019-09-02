import { Formik } from 'formik';
import PropTypes from 'prop-types';
import useAxios from 'axios-hooks';
import React, { useContext } from 'react';
import { withRouter } from 'react-router';
// components
import { RouteLink, FormFields } from '../../../components';
// constants
import * as C from '../../../constants';
// global-state
import { setCurrentUser } from '../../../global-state/dispatchers';
// helpers
import * as H from '../../../helpers';
// hooks
import { useRequest } from '../../../hooks';
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
        placeholder: 'labels.login',
      },
    },
    {
      type: 'input',
      input: {
        ...Theme.form.input.authPages,
        type: 'password',
        required: true,
        name: C.USER_FIELDS.FIELD_PASSWORD,
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
          styles={{ fontSize: '12px' }}
          linkTo={C.ROUTE_PASSWORD_FORGOT_PAGE}
          text={H.getLocale('actions.forgotPassword')}
        />
      </Box>
      <Button type='submit' {...Theme.btns.authPages}>
        {H.getLocale('actions.login')}
      </Button>
    </form>
  );
};

const auth = {
  username: 'frontend',
  password: 'secret',
};

export const SignInPage = props => {
  const { history } = props;

  // const request = useRequest(C.AUTH_OPTIONS);
  // async function sendLoginData(body) {
  //   const data = await request.post(C.ENDP_SIGNIN, body);
  //   if (H.hasNotResponseErrors(data)) {
  //     setCurrentUser(data);
  //     H.showToast('success', 'messages.successLogin');
  //     history.push(C.ROUTE_HOME_PAGE);
  //   }
  // }

  const [{ data, loading, error, response }, executeRequest] = useAxios(
    {
      method: 'POST',
      url: H.makeRequestUrl(C.ENDP_SIGNIN),
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      // headers: H.makeRequestHeaders(C.AUTH_OPTIONS.headers),
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
    executeRequest({ data, auth });
  }

  if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error!</p>;
  // if (data) return <pre>{JSON.stringify(putData, null, 2)}</pre>;

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
      <Flex height='100%' alignItems='center' flexDirection='column' justifyContent='center'>
        <Box mb='50px'>
          <LogoIcon />
        </Box>
        <Formik
          onSubmit={(values, { setSubmitting }) => {
            // const body = new FormData(values);
            // body.append('username', username);
            // body.append('password', password);
            // body.append('grant_type', 'password');
            sendLoginData(values);
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
