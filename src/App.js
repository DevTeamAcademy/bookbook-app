import React, { StrictMode } from 'react';
import { withRouter } from 'react-router-dom';
import ErrorBoundary from 'react-error-boundary';
import { ToastsContainer, ToastsStore } from 'react-toasts';
// css
import 'react-loading-bar/dist/index.css';
// root
import rootReducer from './reducer';
// contexts
import { LocaleProvider } from './contexts/locale';
// global-state
import { GlobalStateProvider } from './global-state';
// routes
import Routes from './routes';
// ui
import GlobalStyles from './ui/global-styles';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/auth';
// import 'firebase/firestore' // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
import { createStore, combineReducers, compose } from 'redux';
import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase';
// import { createFirestoreInstance, firestoreReducer } from 'redux-firestore'

// import ApolloClient from 'apollo-boost';
// import { ApolloProvider } from 'react-apollo-hooks';

// const client = new ApolloClient();

const firebaseConfig = {
  apiKey: 'AIzaSyA_JNGWr-TlYsxQxGSILFuhfyyYfYqwmiA',
  authDomain: 'bookbook-api-v1.firebaseapp.com',
  databaseURL: 'https://bookbook-api-v1.firebaseio.com',
  projectId: 'bookbook-api-v1',
  storageBucket: 'bookbook-api-v1.appspot.com',
  messagingSenderId: '271861363707',
  appId: '1:271861363707:web:258548d4895aca4c26915e',
  measurementId: 'G-NK7SJBYX65',
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize other services on firebase instance
// firebase.firestore() // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable

// Create store with reducers and initial state
const initialState = {};
const store = createStore(rootReducer, initialState);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  // createFirestoreInstance // <- needed if using firestore
};

const ErrorFallback = ({ error }) => {
  return (
    <>
      <p>There was an error</p>
      <pre style={{ maxWidth: 700 }}>{JSON.stringify(error, null, 2)}</pre>
    </>
  );
};

const App = () => (
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <GlobalStyles />
      <ToastsContainer store={ToastsStore} />
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <GlobalStateProvider>
            <LocaleProvider>
              <Routes />
            </LocaleProvider>
          </GlobalStateProvider>
        </ReactReduxFirebaseProvider>
      </Provider>
    </ErrorBoundary>
  </StrictMode>
);

export default withRouter(App);
