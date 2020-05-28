import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const isAuthenticaded = () => {
  if (localStorage.getItem('token') !== null) {
    return true
  }
  return false;
}

const RoutesPrivate = ({ component: Component, ...rest }) => {

  return (
    <Route
      {...rest}
      render={() => isAuthenticaded()
        ? <Component {...rest} />
        : <Redirect to='/' />
      }
    />
  )
}

export default RoutesPrivate;

