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
// ui
import { Flex } from '../../ui';
// /////////////////////////////////////////////////////////////////////////////////////////////////

const commonInputStyles = {
  width: '140px',
  height: '20px',
  bg: '#fff8f0',
  borderRadius: '1px',
};

export const signUpFormSettings = {
  wrapperStyles: {
    flexDirection: 'column',
  },
  fields: [
    {
      input: {
        ...commonInputStyles,
        type: 'text',
        required: true,
        name: C.USER.FIRST_NAME,
      },
      label: {
        locale: ['labels', 'firstName'],
      },
    },
    {
      input: {
        ...commonInputStyles,
        type: 'text',
        required: true,
        name: C.USER.LAST_NAME,
      },
      label: {
        locale: ['labels', 'lastName'],
      },
    },
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
  // use hooks to send data here
  return (
    <Flex data-testid={C.TEST_ID_SIGNUP_PAGE}>
      <Formik
        onSubmit={(values, { setSubmitting }) => {
          debugger;
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
        render={props => <SignUpForm {...props} />}
      />
    </Flex>
  );
};

export default withTheme(SignUpPage);

SignUpPage.propTypes = {};

SignUpPage.displayName = 'SignUpPage';
