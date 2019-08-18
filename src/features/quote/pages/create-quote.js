import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
// components
import { Multiswitch } from '../../../components';
// constants
import * as C from '../../../constants';
// helpers
import * as H from '../../../helpers';
// hooks
import { useRequest } from '../../../hooks';
// ui
import { Flex, PageWrapper } from '../../../ui';
// feature quote
import QuoteForm from '../components/quote-form';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export const CreateQuotePage = props => {
  async function sendData(body) {
    // TODO: with request
    console.log(body);
  }
  return (
    <PageWrapper p={20}>
      <Flex alignItems='center' flexDirection='column' justifyContent='center'>
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
