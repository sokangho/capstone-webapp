import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { authenticationService } from '../../services/authentication.service';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const currentUser = authenticationService.currentUser;

      if (!currentUser) {
        // Not logged in, redirect to login page with the return url
        return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
      }

      // Authorised, returns component
      return <Component {...props} />;
    }}
  />
);
