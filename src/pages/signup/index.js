import { Formik } from 'formik';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { withTheme } from 'styled-components';
import useFetch, { useGet, usePost, usePatch, usePut, useDelete } from 'use-http';
// components
import { FormFields } from '../../components';
// constants
import * as C from '../../constants';
// contexts
import { LocaleContext } from '../../contexts/locale';
// hooks
import { useRequest } from '../../hooks';
// theme
import Theme from '../../theme';
// ui
import { Flex } from '../../ui';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export const signUpFormSettings = {
  wrapperStyles: {
    flexDirection: 'column',
  },
  fields: [
    {
      input: {
        ...Theme.form.input.authPages,
        type: 'login',
        required: true,
        name: C.USER.LOGIN,
      },
      label: {
        locale: ['labels', 'login'],
      },
    },
    {
      input: {
        ...Theme.form.input.authPages,
        type: 'email',
        required: true,
        name: C.USER.EMAIL,
      },
      label: {
        locale: ['labels', 'email'],
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

function SignUpForm(props) {
  const { theme, handleSubmit } = props;
  const { locale } = useContext(LocaleContext);
  return (
    <form onSubmit={handleSubmit}>
      <FormFields {...props} theme={theme} locale={locale} settings={signUpFormSettings} />
      <button type='submit'>Submit</button>
    </form>
  );
}

export const SignUpPage = props => {
  const [data, loading, error, request] = useRequest();
  return (
    <Flex data-testid={C.TEST_ID_SIGNUP_PAGE}>
      <Formik
        onSubmit={(values, { setSubmitting }) => {
          request.post(C.ENDP_SIGNUP, values);
        }}
        render={props => <SignUpForm {...props} />}
      />
    </Flex>
  );
};

export default withTheme(SignUpPage);

SignUpPage.propTypes = {};

SignUpPage.displayName = 'SignUpPage';
