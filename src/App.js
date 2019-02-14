import React, { StrictMode } from 'react';
import { withRouter } from 'react-router-dom';
import ErrorBoundary from 'react-error-boundary';
import { ThemeProvider } from 'styled-components';
// contexts
import { LocaleProvider } from './contexts/locale';
// global-state
import { GlobalStateProvider } from './global-state';
// routes
import Routes from './routes';
// theme
import theme from './theme';
// ui
import GlobalStyles from './ui/globalStyles';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

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
      <GlobalStateProvider>
        <ThemeProvider theme={theme}>
          <LocaleProvider>
            <Routes />
          </LocaleProvider>
        </ThemeProvider>
      </GlobalStateProvider>
    </ErrorBoundary>
  </StrictMode>
);

export default withRouter(App);
