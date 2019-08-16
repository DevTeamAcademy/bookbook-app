import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
// constants
import * as C from '../../../constants';
// helpers
import * as H from '../../../helpers';
// hooks
import { useRequest } from '../../../hooks';
// ui
import { Box, Flex, PageWrapper } from '../../../ui';
// feature quote
import QuoteForm from '../components/quote-form';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export const CreateQuotePage = props => {
  async function sendData(body) {
    // TODO: with request
  }
  return (
    <PageWrapper p={20}>
      <Flex alignItems='center' flexDirection='column' justifyContent='center'>
        <Box>Switch here</Box>
        <Formik onSubmit={(values, { setSubmitting }) => sendData(values)} render={props => <QuoteForm {...props} />} />
      </Flex>
    </PageWrapper>
  );
};

export default CreateQuotePage;

CreateQuotePage.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object,
};

CreateQuotePage.displayName = 'CreateQuotePage';
