import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { colors } from '../../styleGuide';
import LoginView from '../Login';
import HomeView from '../Home';
import PrivateRoute from '../../components/PrivateRoute';

const GlobalBackgroundStyle = createGlobalStyle`
  html {
    background-color: ${colors.background}
  }
  body {
    margin: 0px;
  }
`;

const App = () => {
  return (
    <div id="main">
      <GlobalBackgroundStyle />
      <Switch>
        <Route exact path="/login" component={LoginView} />
        <PrivateRoute path="/" component={HomeView} />
      </Switch>
    </div>
  );
};

export default App;
