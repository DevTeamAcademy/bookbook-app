import { Formik } from 'formik';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { withTheme } from 'styled-components';
// components
import { FormFields } from '../../components';
// constants
import * as C from '../../constants';
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

export const SignInPage = props => {
  // use hooks to send data here
  const [data, loading, error, request] = useRequest();
  return (
    <Flex data-testid={C.TEST_ID_SIGNIN_PAGE}>
      <Formik
        onSubmit={(values, { setSubmitting }) => {
          request.post('/signin', values);
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
