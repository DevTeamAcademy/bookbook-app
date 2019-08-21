import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
// components
import { FormFields } from '../../components';
// constants
import * as C from '../../constants';
// helpers
import * as H from '../../helpers';
// images
import { ReactComponent as LogoIcon } from '../../images/logo.svg';
// theme
import Theme from '../../theme';
// ui
import { Box, Flex, Button, AuthPagesWrapper } from '../../ui';
// /////////////////////////////////////////////////////////////////////////////////////////////////

const SendPasswordFormSettings = {
  wrapperStyles: {
    flexDirection: 'column',
  },
  fields: [
    {
      type: 'input',
      input: {
        ...Theme.form.input.authPages,
        type: 'password',
        required: true,
        placeholder: 'labels.password',
        name: C.USER_FIELDS.FIELD_PASSWORD,
      },
    },
  ],
};

const SendPasswordForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <FormFields {...props} settings={SendPasswordFormSettings} />
      <Button type='submit' {...Theme.btns.authPages}>
        {H.getLocale('actions.send')}
      </Button>
    </form>
  );
};

export const PasswordResetPage = props => {
  return (
    <AuthPagesWrapper>
      <Flex height='100%' alignItems='center' flexDirection='column' justifyContent='center'>
        <Box mb={70}>
          <LogoIcon />
        </Box>
        <Formik
          onSubmit={(values, { setSubmitting }) => {
            const { password } = values;
            const body = new FormData(values);
            body.append('password', password);
            // sendLoginData(body); // TODO Finish request
          }}
          render={props => <SendPasswordForm {...props} />}
        />
      </Flex>
    </AuthPagesWrapper>
  );
};

export default PasswordResetPage;

PasswordResetPage.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object,
};

PasswordResetPage.displayName = 'PasswordResetPage';
