import React from 'react';
import { withRouter } from 'react-router-dom';
import ErrorBoundary from 'react-error-boundary';
import { ThemeProvider } from 'styled-components';
// contexts
import { LocaleProvider } from './contexts/locale';
// routes
import Routes from './routes';
// theme
import theme from './theme';
// ui
import GlobalStyles from './ui/globalStyles';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

function ErrorFallback({ error }) {
  return (
    <>
      <p>There was an error</p>
      <pre style={{ maxWidth: 700 }}>{JSON.stringify(error, null, 2)}</pre>
    </>
  );
}

const App = () => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <LocaleProvider>
        <Routes />
      </LocaleProvider>
    </ThemeProvider>
  </ErrorBoundary>
);

export default withRouter(App);
