import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { colors } from '../../styleGuide';
import LoginView from '../Login';
import HomeView from '../Home';
import AppListView from '../AppList';

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
    <>
      <GlobalBackgroundStyle />
      <Switch>
        <Route path="/applications">
          <AppListView />
        </Route>
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
