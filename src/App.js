import React, { StrictMode } from 'react';
import { withRouter } from 'react-router-dom';
import ErrorBoundary from 'react-error-boundary';
import { ToastsContainer, ToastsStore } from 'react-toasts';
// css
import 'react-loading-bar/dist/index.css';
// contexts
import { LocaleProvider } from './contexts/locale';
// global-state
import { GlobalStateProvider } from './global-state';
// routes
import Routes from './routes';
// ui
import GlobalStyles from './ui/global-styles';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo-hooks';

const client = new ApolloClient();

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
      <ApolloProvider client={client}>
        <GlobalStyles />
        <ToastsContainer store={ToastsStore} />
        <GlobalStateProvider>
          <LocaleProvider>
            <Routes />
          </LocaleProvider>
        </GlobalStateProvider>
      </ApolloProvider>
    </ErrorBoundary>
  </StrictMode>
);

export default withRouter(App);
