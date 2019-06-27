import { Formik } from 'formik';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { withTheme } from 'styled-components';
// components
import { FormFields } from '../../components';
// constants
import * as C from '../../constants';
// global-state
import { dispatch, useGlobalState } from '../../global-state';
import { GLOBAL_SET_CURRENT_USER } from '../../global-state/action-types';
// contexts
import { LocaleContext } from '../../contexts/locale';
// hooks
import { useRequest } from '../../hooks';
// ui
import { Flex } from '../../ui';
// /////////////////////////////////////////////////////////////////////////////////////////////////

// REFACTOR: add more reuse logic with signup

const commonInputStyles = {
  width: '140px',
  height: '20px',
  bg: '#fff8f0',
  borderRadius: '1px',
};

export const signInFormSettings = {
  wrapperStyles: {
    flexDirection: 'column',
  },
  fields: [
    {
      input: {
        ...commonInputStyles,
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
        ...commonInputStyles,
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

const authOptions = {
  headers: {
    Authorization: `Basic ${btoa('frontend:secret')}`,
  },
};

const setCurrentUser = user => dispatch({ type: GLOBAL_SET_CURRENT_USER, payload: user });

const signinUser = async (data, request, body) => {
  const res = await request.post(C.ENDP_SIGNIN, body);
  debugger;
  // const queryParams = `?login=${encodeURI(values.login)}&password=${encodeURI(values.password)}`
  // request.get(C.ENDP_SIGNIN, queryParams);
  // get(queryParams);
  // setTimeout(() => {
  //   alert(JSON.stringify(values, null, 2));
  //   setSubmitting(false);
  // }, 400);
};

export const SignInPage = props => {
  const [data, loading, error, request] = useRequest(authOptions);
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
          // signinUser(data, request, body);
          request.post(C.ENDP_SIGNIN, body);
          // const queryParams = `?login=${encodeURI(values.login)}&password=${encodeURI(values.password)}`
          // request.get(C.ENDP_SIGNIN, queryParams);
          // get(queryParams);
          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          //   setSubmitting(false);
          // }, 400);
        }}
        render={props => <SignInForm {...props} />}
      />
    </Flex>
  );
};

export default withTheme(SignInPage);

SignInPage.propTypes = {};

SignInPage.displayName = 'SignInPage';
