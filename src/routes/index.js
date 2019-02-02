import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ROUTE_HOME_LIST } from '../constants';
// components
import HeaderNav from '../components/header-nav';
////////////////////////////////////////////////////////////////////////////////////////////////////

const HomeList = lazy(() => import(/* webpackChunkName: 'HomeList' */ '../views/home'));

const Layout = ({ children }) => (
  <>
    <HeaderNav />
    <Suspense fallback={null}>{children}</Suspense>
  </>
);

export default () => (
  <Suspense fallback={null}>
    <Switch>
      <Layout>
        <Switch>
          <Route path={ROUTE_HOME_LIST} exact component={HomeList} />
          <RedirectTo redirect={ROUTE_HOME_LIST} />
        </Switch>
      </Layout>
    </Switch>
  </Suspense>
);

const RedirectTo = props => <Redirect to={props.redirect} />;
