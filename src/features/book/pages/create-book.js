import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
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
import BookForm from '../components/book-form';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export const CreateBookPage = props => {
  async function sendData(body) {
    // TODO: with request
    console.log(body);
  }
  return (
    <PageWrapper p={20}>
      <Flex alignItems='center' flexDirection='column' justifyContent='center'>
        <Formik onSubmit={(values, { setSubmitting }) => sendData(values)} render={props => <BookForm {...props} />} />
      </Flex>
    </PageWrapper>
  );
};

export default CreateBookPage;

CreateBookPage.propTypes = PT.withRouterPropTypes;

CreateBookPage.displayName = 'CreateBookPage';
