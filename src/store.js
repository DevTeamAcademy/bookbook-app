/* eslint-disable */
import R from 'ramda';
import logger from 'redux-logger';
// import createSagaMiddleware from 'redux-saga';
// import { createLogicMiddleware } from 'redux-logic';
import { compose, applyMiddleware, createStore as createReduxStore } from 'redux';
// root
// import arrLogic from './logic';
import reducers from './reducer';
//////////////////////////////////////////////////

let initialState = {};
let devToolsExtensionComposable = null;

if (typeof window !== 'undefined' && process && process.env && process.env.NODE_ENV !== 'production') {
  if (window.devToolsExtension) {
    devToolsExtensionComposable = window.devToolsExtension();
  }
}

function createStore() {
  let additionalMiddlewares = [];
  // const logicMiddleware = createLogicMiddleware(arrLogic);
  // const sagaMiddleware = createSagaMiddleware();
  if (typeof window !== 'undefined' && process && process.env && process.env.NODE_ENV === 'development') {
    additionalMiddlewares.push(logger);
  }
  const middleWares = [
    // logicMiddleware,
    // sagaMiddleware,
    ...additionalMiddlewares,
  ];
  const composables = [applyMiddleware(...middleWares)];
  if (devToolsExtensionComposable) {
    composables.push(devToolsExtensionComposable);
  }
  const store = createReduxStore(reducers, initialState, compose(...composables));
  if (module.hot) {
    module.hot.accept('./reducer', () => {
      store.replaceReducer(reducers);
    });
  }
  // const sagas = [
  //   mainSaga,
  // ];
  // sagas.forEach((saga) => sagaMiddleware.run(saga));
  return store;
}

export default createStore;
/* eslint-enable */
