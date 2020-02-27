import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// constants
import * as C from '../constants';
// routes
import Layout from './Layout';
// //////////////////////////////////////////////////

const HomePage = lazy(() => import(/* webpackChunkName: 'HomePage' */ '../pages/home'));
const HelpPage = lazy(() => import(/* webpackChunkName: 'HelpPage' */ '../pages/help'));
const SharePage = lazy(() => import(/* webpackChunkName: 'SharePage' */ '../pages/share'));
const AboutPage = lazy(() => import(/* webpackChunkName: 'AboutPage' */ '../pages/about'));
const QuotesPage = lazy(() => import(/* webpackChunkName: 'QuotesPage' */ '../features/quote'));
const LibraryPage = lazy(() => import(/* webpackChunkName: 'LibraryPage' */ '../features/library'));
const ProfilePage = lazy(() => import(/* webpackChunkName: 'ProfilePage' */ '../features/profile'));
const SettingsPage = lazy(() => import(/* webpackChunkName: 'SettingsPage' */ '../features/settings'));
const SearchPage = lazy(() => import(/* webpackChunkName: 'SearchPage' */ '../features/search/pages'));
const SignInPage = lazy(() => import(/* webpackChunkName: 'SignInPage' */ '../features/auth/pages/signin'));
const SignUpPage = lazy(() => import(/* webpackChunkName: 'SignUpPage' */ '../features/auth/pages/signup'));
const LanguagePage = lazy(() => import(/* webpackChunkName: 'LanguagePage' */ '../features/settings/pages/language'));
const HomeListSettingsPage = lazy(() =>
  import(/* webpackChunkName: 'HomeListSettingsPage' */ '../features/settings/pages/home-list'),
);
const NotificationsSettingsPage = lazy(() =>
  import(/* webpackChunkName: 'NotificationsSettingsPage' */ '../features/settings/pages/notifications'),
);
const CreateQuotePage = lazy(() =>
  import(/* webpackChunkName: 'CreateQuotePage' */ '../features/quote/pages/create-quote'),
);
const CreateBookPage = lazy(() =>
  import(/* webpackChunkName: 'CreateBookPage' */ '../features/book/pages/create-book'),
);
const CreateLibraryPage = lazy(() =>
  import(/* webpackChunkName: 'CreateLibraryPage' */ '../features/library/pages/create-library'),
);
const PasswordResetPage = lazy(() =>
  import(/* webpackChunkName: 'PasswordResetPage' */ '../features/auth/pages/password-reset'),
);
const PasswordForgotPage = lazy(() =>
  import(/* webpackChunkName: 'PasswordForgotPage' */ '../features/auth/pages/password-forgot'),
);

// TODO: check better place to getting initial API data
export default () => {
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
            <Route path={C.ROUTE_CREATE_BOOK_PAGE} exact component={CreateBookPage} />
            <Route path={C.ROUTE_CREATE_QUOTE_PAGE} exact component={CreateQuotePage} />
            <Route path={C.ROUTE_CREATE_LIBRARY_PAGE} exact component={CreateLibraryPage} />
            <Route path={C.ROUTE_HOME_PAGE_SETTINGS_PAGE} exact component={HomeListSettingsPage} />
            <Route path={C.ROUTE_NOTIFICATIONS_SETTINGS_PAGE} exact component={NotificationsSettingsPage} />
            <RedirectTo redirect={C.ROUTE_HOME_PAGE} />
          </Switch>
        </Layout>
      </Switch>
    </Suspense>
  );
};

const RedirectTo = props => <Redirect to={props.redirect} />;
