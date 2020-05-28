import React from 'react';
import { Switch, Route } from 'react-router-dom';
import StoreProvider from '../components/Store/Provider';
import RoutesPrivate from '../auth';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const Routes = () => (
  <StoreProvider>
    <Switch>
      <Route exact path="/" component={Login} />
      <RoutesPrivate path="/dashboard" component={Dashboard} />
    </Switch>
  </StoreProvider>
)

export default Routes;
