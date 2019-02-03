import React, { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// constants
import { ROUTE_SEARCH, ROUTE_HOME_LIST } from '../constants';
// routes
import Layout from './Layout';
////////////////////////////////////////////////////////////////////////////////////////////////////

// TODO: with test and all views

const HomeList = lazy(() => import(/* webpackChunkName: 'HomeList' */ '../views/home'));
const Search = lazy(() => import(/* webpackChunkName: 'Search' */ '../views/search'));

export default () => (
  <Switch>
    {/* Auth pages here */}
    <Layout>
      <Switch>
        <Route path={ROUTE_HOME_LIST} exact component={HomeList} />
        <Route path={ROUTE_SEARCH} exact component={Search} />
        <RedirectTo redirect={ROUTE_HOME_LIST} />
      </Switch>
    </Layout>
  </Switch>
);

const RedirectTo = props => <Redirect to={props.redirect} />;
