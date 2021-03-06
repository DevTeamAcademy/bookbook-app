import firebase from 'firebase/app';
import { Provider } from 'react-redux';
import React, { StrictMode } from 'react';
import { withRouter } from 'react-router-dom';
import ErrorBoundary from 'react-error-boundary';
import { createFirestoreInstance } from 'redux-firestore';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import 'firebase/auth';
import 'firebase/database'; // check this for index.js:1437 Error: Real Time Database or Firestore must be included to enable user profile
import 'firebase/firestore'; // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
// css
import 'react-loading-bar/dist/index.css';
// root
import createStore from './store';
// contexts
import { LocaleProvider } from './contexts/locale';
// global-state
import { GlobalStateProvider } from './global-state';
// routes
import Routes from './routes';
// ui
import GlobalStyles from './ui/global-styles';
// //////////////////////////////////////////////////

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
firebase.database(); // <- needed if using firestore
firebase.firestore(); // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable

// Create store with reducers, middlewares and initial state
const store = createStore();

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
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
