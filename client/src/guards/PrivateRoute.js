import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../helpers/auth.helper';

export function AuthRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
           
        if (!isAuthenticated()) {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
        return <Component {...props} />;
      }}
    />
  );
}

export function AdminRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuthenticated() && isAuthenticated().roles.includes("admin")) {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
        return <Component {...props} />;
      }}
    />
  );
}

 