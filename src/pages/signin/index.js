import { Formik } from 'formik';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { withTheme } from 'styled-components';
// components
import { FormFields } from '../../components';
// constants
import * as C from '../../constants';
// global-state
import { setCurrentUser } from '../../global-state/dispatchers';
// contexts
import { LocaleContext } from '../../contexts/locale';
// theme
import Theme from '../../theme';
// hooks
import { useRequest } from '../../hooks';
// ui
import { Flex } from '../../ui';
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
      },
      label: {
        locale: ['labels', 'login'],
      },
    },
    {
      input: {
        ...Theme.form.input.authPages,
        type: 'password',
        required: true,
        name: C.USER.PASSWORD,
      },
      label: {
        locale: ['labels', 'password'],
      },
    },
  ],
};

function SignInForm(props) {
  const { theme, handleSubmit } = props;
  const { locale } = useContext(LocaleContext);
  return (
    <form onSubmit={handleSubmit}>
      <FormFields {...props} theme={theme} locale={locale} settings={signInFormSettings} />
      <button type='submit'>Submit</button>
    </form>
  );
}

export const SignInPage = props => {
  const [data, loading, error, request] = useRequest(C.AUTH_OPTIONS);
  if (data) {
    setCurrentUser(data);
  }
  return (
    <Flex data-testid={C.TEST_ID_SIGNIN_PAGE}>
      <Formik
        onSubmit={(values, { setSubmitting }) => {
          const { username, password } = values;
          const body = new FormData(values);
          body.append('username', username);
          body.append('password', password);
          body.append('grant_type', 'password');
          request.post(C.ENDP_SIGNIN, body);
        }}
        render={props => <SignInForm {...props} />}
      />
    </Flex>
  );
};

export default withTheme(SignInPage);

SignInPage.propTypes = {};

SignInPage.displayName = 'SignInPage';
