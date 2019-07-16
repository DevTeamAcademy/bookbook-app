import R from 'ramda';
import React, { lazy, Suspense, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// constants
import * as C from '../constants';
// global-state
import { setCurrentUser } from '../global-state/dispatchers';
// helpers
import * as H from '../helpers';
// hooks
import { useRequest } from '../hooks';
// routes
import Layout from './Layout';
////////////////////////////////////////////////////////////////////////////////////////////////////

const HomePage = lazy(() => import(/* webpackChunkName: 'HomePage' */ '../pages/home'));
const SignInPage = lazy(() => import(/* webpackChunkName: 'SignInPage' */ '../pages/signin'));
const SignUpPage = lazy(() => import(/* webpackChunkName: 'SignUpPage' */ '../pages/signup'));
const SearchPage = lazy(() => import(/* webpackChunkName: 'SearchPage' */ '../pages/search'));
const QuotesPage = lazy(() => import(/* webpackChunkName: 'QuotesPage' */ '../pages/quotes'));
const LibraryPage = lazy(() => import(/* webpackChunkName: 'LibraryPage' */ '../pages/library'));
const ProfilePage = lazy(() => import(/* webpackChunkName: 'ProfilePage' */ '../pages/profile'));
const NotificationsPage = lazy(() => import(/* webpackChunkName: 'NotificationsPage' */ '../pages/notifications'));

export default () => {
  const [data, loading, error, request] = useRequest(C.AUTH_OPTIONS);
  const token = H.getToken();
  useEffect(() => {
    if (H.isNilOrEmpty(token)) return;
    const body = new FormData();
    body.append('token', token);
    request.post(C.ENDP_SESSION, body);
  }, []);
  if (data) {
    setCurrentUser(R.assoc('access_token', token, data));
  }
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route path={C.ROUTE_SIGNIN_PAGE} exact component={SignInPage} />
        <Route path={C.ROUTE_SIGNUP_PAGE} exact component={SignUpPage} />
        <Layout>
          <Switch>
            <Route path={C.ROUTE_HOME_PAGE} exact component={HomePage} />
            <Route path={C.ROUTE_LIBRARY_PAGE} exact component={LibraryPage} />
            <Route path={C.ROUTE_QUOTES_PAGE} exact component={QuotesPage} />
            <Route path={C.ROUTE_NOTIFICATIONS_PAGE} exact component={NotificationsPage} />
            <Route path={C.ROUTE_SEARCH_PAGE} exact component={SearchPage} />
            <Route path={C.ROUTE_PROFILE_PAGE} exact component={ProfilePage} />
            <RedirectTo redirect={C.ROUTE_HOME_PAGE} />
          </Switch>
        </Layout>
      </Switch>
    </Suspense>
  );
};

const RedirectTo = props => <Redirect to={props.redirect} />;
