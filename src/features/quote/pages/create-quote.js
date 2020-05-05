import R from 'ramda';
import React from 'react';
import { Formik } from 'formik';
import { useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
// constants
import * as C from '../../../constants';
// helpers
import * as H from '../../../helpers';
// prop-types
import * as PT from '../../../prop-types';
// ui
import { Flex, PageWrapper } from '../../../ui';
// feature quote
import QuoteForm from '../components/quote-form';
import { quoteInitialValues, validationSchemaQuote } from '../settings';
// //////////////////////////////////////////////////

async function sendCategories(data, uid, quoteKey, fire) {
  // TODO: use some like compose-p to await all categories and update quote with one call
  const oldCategory = R.pathEq(false, [C.QUOTE_FIELDS.FIELD_CATEGORY, 0, C.FIELD_IS_NEW], data);
  if (oldCategory) return;
  const category = R.omit([C.FIELD_IS_NEW], R.path([C.QUOTE_FIELDS.FIELD_CATEGORY, 0], data));
  const res = await fire.push(`categories/${uid}`, category);
  const categoryKey = res.key;
  fire.update(`quotes/${quoteKey}`, { categories: [categoryKey] });
}

export const CreateQuotePage = props => {
  const { history } = props;

  const firebase = useFirebase();
  const uid = useSelector(state => R.path(['firebase', 'auth', 'uid'], state));

  async function sendData(data) {
    const body = R.compose(
      R.omit([C.QUOTE_FIELDS.FIELD_CATEGORY]),
      R.assoc('uid', uid),
    )(data);
    const res = await firebase.push('quotes', body);
    const quoteKey = res.key;
    sendCategories(data, uid, quoteKey, firebase);
    history.push(C.ROUTE_QUOTES_PAGE);
  }

  return (
    <PageWrapper p={20}>
      <Flex alignItems='center' flexDirection='column' justifyContent='center'>
        <Formik
          initialValues={quoteInitialValues}
          validationSchema={validationSchemaQuote}
          render={props => <QuoteForm {...props} />}
          onSubmit={(values, { setSubmitting }) => sendData(values)}
        />
      </Flex>
    </PageWrapper>
  );
};

export default CreateQuotePage;

CreateQuotePage.propTypes = PT.withRouterPropTypes;

CreateQuotePage.displayName = 'CreateQuotePage';
