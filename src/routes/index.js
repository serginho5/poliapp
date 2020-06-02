import React from 'react';
import { Switch, Route } from 'react-router-dom';
import StoreProvider from '../components/Store/Provider';
import RoutesPrivate from '../auth';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import All from '../pages/All';


const Routes = () => (
  <StoreProvider>
    <Switch>
      <Route exact path="/" component={Login} />
      <RoutesPrivate path="/dashboard" component={Dashboard} />
      <RoutesPrivate path="/all" component={All} />

    </Switch>
  </StoreProvider>
)

export default Routes;
