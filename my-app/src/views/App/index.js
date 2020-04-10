import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { colors } from '../../styleGuide';
import LoginView from '../Login';
import HomeView from '../Home';

const GlobalBackgroundStyle = createGlobalStyle`
  html {
    background-color: ${colors.background}
  }
`;

const App = () => {
  return (
    <>
      <GlobalBackgroundStyle />
      <Switch>
        <Route path="/home">
          <HomeView />
        </Route>

        <Route path="/">
          <LoginView />
        </Route>
      </Switch>
    </>
  );
};

export default App;
