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
import { Box, Flex, Text, Button, AuthPagesWrapper } from '../../ui';
// /////////////////////////////////////////////////////////////////////////////////////////////////

const SendEmailFormSettings = {
  wrapperStyles: {
    flexDirection: 'column',
  },
  fields: [
    {
      input: {
        ...Theme.form.input.authPages,
        type: 'email',
        required: true,
        name: C.USER_FIELDS.FIELD_EMAIL,
        placeholder: 'labels.email',
      },
    },
  ],
};

const SendEmailForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <Text fontSize={18} fontWeight={600} color={Theme.colors.paleYellow}>
          {H.getLocale('actions.forgotPassword')}
        </Text>
        <Box mb={10} width={280} fontSize={12} color={Theme.colors.paleYellow}>
          {H.getLocale('hints.passwordRecovery')}
        </Box>
      </Box>
      <FormFields {...props} settings={SendEmailFormSettings} />
      <Button type='submit' {...Theme.btns.authPages}>
        {H.getLocale('actions.send')}
      </Button>
    </form>
  );
};

export const PasswordForgotPage = props => {
  return (
    <AuthPagesWrapper>
      <Flex height='100%' alignItems='center' flexDirection='column' justifyContent='center'>
        <Box mb={70}>
          <LogoIcon />
        </Box>
        <Formik
          onSubmit={(values, { setSubmitting }) => {
            const { email } = values;
            const body = new FormData(values);
            body.append('email', email);
            // sendLoginData(body); // TODO Finish request
          }}
          render={props => <SendEmailForm {...props} />}
        />
      </Flex>
    </AuthPagesWrapper>
  );
};

export default PasswordForgotPage;

PasswordForgotPage.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object,
};

PasswordForgotPage.displayName = 'PasswordForgotPage';
