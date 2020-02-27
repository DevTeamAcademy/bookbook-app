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
// //////////////////////////////////////////////////

// const compose =
// 	(...funcs) =>
// 	(...args) =>
// 	funcs.reduceRight(async (a, f) => {
// 		if (Array.isArray(a)) {
// 			return await f.apply(undefined, await a);
// 		}
// 		return await f(await a);
// 	}, args)

// module.exports = compose;

/*
 *   Requires Node 8+
 *   Works in chrome, simply copy and paste into console.
 */

// const R = require('ramda');
// const compose = require('./');

// const get = (v) => {
// 	return Promise.resolve(`${v}s`);
// }

// const getAllError = compose(
//   get,
//   () => Promise.reject('Error! :('),
//   get,
//   get
// );
// const getAll = compose(
//   get,
//   get,
//   get,
//   get
// );
// const getAllR = R.composeP(
// 	get,
// 	get,
// 	get,
// 	get
// )
// async function main() {
// 	try {
// 		const v = await getAllError('ted');
// 		console.log('result', v);
// 	} catch (e) {
// 		console.error(e);
// 	}

//     try {
// 		const v = await getAll('ted');
// 		console.log('result', v);
// 	} catch (e) {
// 		console.error(e);
// 	}

// 	console.log(await get(await get(await get('ted'))));
// 	console.log(await getAllR('ramda'))
// }

//
// function delay() {
//   return new Promise(resolve => setTimeout(resolve, 300));
// }
// async function delayedLog(item) {
//   // мы можем использовать await для Promise
//   // который возвращается из delay
//   await delay();
//   console.log(item);
// }
// async function processArray(array) {
//   // делаем "map" массива в промисы
//   const promises = array.map(delayedLog);
//   // ждем когда всё промисы будут выполнены
//   await Promise.all(promises);
//   console.log('Done!');
// }
// processArray([1, 2, 3]);
//

async function sendCategories(data, uid, quoteKey, fire) {
  // TODO: use some like compose-p to await all categories and update quote with one call
  const category = R.path([C.QUOTE_FIELDS.FIELD_CATEGORY, 0], data);
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
        <Formik onSubmit={(values, { setSubmitting }) => sendData(values)} render={props => <QuoteForm {...props} />} />
      </Flex>
    </PageWrapper>
  );
};

export default CreateQuotePage;

CreateQuotePage.propTypes = PT.withRouterPropTypes;

CreateQuotePage.displayName = 'CreateQuotePage';
