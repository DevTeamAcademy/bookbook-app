import R from 'ramda';
import useAxios from 'axios-hooks';
import React, { lazy, Suspense, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// constants
import * as C from '../constants';
// global-state
import { setCurrentUser } from '../global-state/dispatchers';
// helpers
import * as H from '../helpers';
// routes
import Layout from './Layout';
////////////////////////////////////////////////////////////////////////////////////////////////////

const HomePage = lazy(() => import(/* webpackChunkName: 'HomePage' */ '../pages/home'));
const HelpPage = lazy(() => import(/* webpackChunkName: 'HelpPage' */ '../pages/help'));
const SharePage = lazy(() => import(/* webpackChunkName: 'SharePage' */ '../pages/share'));
const AboutPage = lazy(() => import(/* webpackChunkName: 'AboutPage' */ '../pages/about'));
const QuotesPage = lazy(() => import(/* webpackChunkName: 'QuotesPage' */ '../features/quote'));
const LibraryPage = lazy(() => import(/* webpackChunkName: 'LibraryPage' */ '../pages/library'));
const ProfilePage = lazy(() => import(/* webpackChunkName: 'ProfilePage' */ '../features/profile'));
const SettingsPage = lazy(() => import(/* webpackChunkName: 'SettingsPage' */ '../features/settings'));
const SearchPage = lazy(() => import(/* webpackChunkName: 'SearchPage' */ '../features/search/pages'));
const SignInPage = lazy(() => import(/* webpackChunkName: 'SignInPage' */ '../features/auth/pages/signin'));
const SignUpPage = lazy(() => import(/* webpackChunkName: 'SignUpPage' */ '../features/auth/pages/signup'));
const NotificationsPage = lazy(() => import(/* webpackChunkName: 'NotificationsPage' */ '../pages/notifications'));
const LanguagePage = lazy(() => import(/* webpackChunkName: 'LanguagePage' */ '../features/settings/pages/language'));
const CreateQuotePage = lazy(() =>
  import(/* webpackChunkName: 'CreateQuotePage' */ '../features/quote/pages/create-quote'),
);
const PasswordResetPage = lazy(() =>
  import(/* webpackChunkName: 'PasswordResetPage' */ '../features/auth/pages/password-reset'),
);
const PasswordForgotPage = lazy(() =>
  import(/* webpackChunkName: 'PasswordForgotPage' */ '../features/auth/pages/password-forgot'),
);

// TODO: check better place to getting initial API data
export default () => {
  const token = H.getToken();
  const [{ data, error, response }, executeRequest] = useAxios(
    {
      method: 'POST',
      url: H.makeRequestUrl(C.ENDP_SESSION),
      headers: H.makeRequestHeaders(C.AUTH_OPTIONS.headers),
    },
    { manual: true },
  );
  function sendSessionData() {
    const data = H.qsStringify({ token });
    executeRequest({ data });
  }
  if (error) {
    H.showResponseError(error);
  }
  if (H.isResponseSuccess(response)) {
    setCurrentUser(R.assoc('access_token', token, data));
  }
  useEffect(() => {
    if (H.isNilOrEmpty(token)) return;
    sendSessionData();
  }, []);

  return (
    <Suspense fallback={null}>
      <Switch>
        <Route path={C.ROUTE_SIGNIN_PAGE} exact component={SignInPage} />
        <Route path={C.ROUTE_SIGNUP_PAGE} exact component={SignUpPage} />
        <Route path={C.ROUTE_PASSWORD_RESET_PAGE} exact component={PasswordResetPage} />
        <Route path={C.ROUTE_PASSWORD_FORGOT_PAGE} exact component={PasswordForgotPage} />
        <Layout>
          <Switch>
            <Route path={C.ROUTE_HELP_PAGE} exact component={HelpPage} />
            <Route path={C.ROUTE_HOME_PAGE} exact component={HomePage} />
            <Route path={C.ROUTE_SHARE_PAGE} exact component={SharePage} />
            <Route path={C.ROUTE_ABOUT_PAGE} exact component={AboutPage} />
            <Route path={C.ROUTE_QUOTES_PAGE} exact component={QuotesPage} />
            <Route path={C.ROUTE_SEARCH_PAGE} exact component={SearchPage} />
            <Route path={C.ROUTE_PROFILE_PAGE} exact component={ProfilePage} />
            <Route path={C.ROUTE_LIBRARY_PAGE} exact component={LibraryPage} />
            <Route path={C.ROUTE_LANGUAGE_PAGE} exact component={LanguagePage} />
            <Route path={C.ROUTE_SETTINGS_PAGE} exact component={SettingsPage} />
            <Route path={C.ROUTE_CREATE_QUOTE_PAGE} exact component={CreateQuotePage} />
            <Route path={C.ROUTE_NOTIFICATIONS_PAGE} exact component={NotificationsPage} />
            <RedirectTo redirect={C.ROUTE_HOME_PAGE} />
          </Switch>
        </Layout>
      </Switch>
    </Suspense>
  );
};

const RedirectTo = props => <Redirect to={props.redirect} />;
