import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { colors } from '../../styleGuide';
import LoginView from '../Login';

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
        <Route path="/">
          <LoginView />
        </Route>
      </Switch>
    </>
  );
};

export default App;
