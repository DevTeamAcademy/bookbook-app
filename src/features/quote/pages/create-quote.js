import { Formik } from 'formik';
import React, { useState } from 'react';
import { useFirebase } from 'react-redux-firebase';
// constants
import * as C from '../../../constants';
// helpers
import * as H from '../../../helpers';
// prop-types
import * as PT from '../../../prop-types';
// hooks
import { useRequest } from '../../../hooks';
// ui
import { Flex, PageWrapper } from '../../../ui';
// feature quote
import QuoteForm from '../components/quote-form';
// //////////////////////////////////////////////////

export const CreateQuotePage = props => {
  const { history } = props;

  const firebase = useFirebase();

  async function sendData(body) {
    const res = await firebase.push('quotes', body);
    history.push(C.ROUTE_QUOTES_PAGE);
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

CreateQuotePage.propTypes = PT.withRouterPropTypes;

CreateQuotePage.displayName = 'CreateQuotePage';
