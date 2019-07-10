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
import { Box, Flex, Button, AuthPagesWrapper } from '../../ui';
// /////////////////////////////////////////////////////////////////////////////////////////////////

// REFACTOR: add more reuse logic with signup

export const signInFormSettings = {
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
        placeholder: ['labels', 'login'],
      },
    },
    {
      input: {
        ...Theme.form.input.authPages,
        type: 'password',
        required: true,
        name: C.USER.PASSWORD,
        placeholder: ['labels', 'email'],
      },
    },
  ],
};

function SignInForm(props) {
  const { locale, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <FormFields {...props} locale={locale} settings={signInFormSettings} />
      <Button type='submit' {...Theme.btns.authPages}>
        {H.getLocale(['actions', 'login'], locale)}
      </Button>
    </form>
  );
}

export const SignInPage = props => {
  const { history } = props;
  const { locale } = useContext(LocaleContext);
  const [data, loading, error, request] = useRequest(C.AUTH_OPTIONS);
  if (data) {
    setCurrentUser(data);
    history.push(C.ROUTE_HOME_PAGE);
  }
  return (
    <AuthPagesWrapper data-testid={C.TEST_ID_SIGNIN_PAGE}>
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
            request.post(C.ENDP_SIGNIN, body);
          }}
          render={props => <SignInForm {...props} locale={locale} />}
        />
        <Box mt='50px'>
          <RouteLink
            linkTo='/signup'
            styles={{ fontSize: '14px' }}
            text={H.getLocale(['actions', 'register'], locale)}
          />
        </Box>
      </Flex>
    </AuthPagesWrapper>
  );
};

export default withRouter(SignInPage);

SignInPage.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

SignInPage.displayName = 'SignInPage';
