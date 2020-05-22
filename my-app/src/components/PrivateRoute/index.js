import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import PropTypes from 'prop-types';

import authenticationService from '../../services/authentication.service';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const { currentUser } = authenticationService;

      if (!currentUser) {
        // Not logged in, redirect to login page with the return url
        return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
      }

      const token = jwt.decode(currentUser.token);
      if (token.exp < Date.now() / 1000) {
        // Token expired, redirect to login page with the return url
        authenticationService.logout();
        return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
      }

      // Authorised, returns component
      return <Component {...props} />;
    }}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  location: PropTypes.object
};

export default PrivateRoute;
