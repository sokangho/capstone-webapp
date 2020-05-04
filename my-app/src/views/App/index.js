import React from "react";
import { Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import { colors } from "../../styleGuide";
import LoginView from "../Login";
import HomeView from "../Home";
import PrivateRoute from "../../components/PrivateRoute";
import ApplicationDashboardView from "../ApplicationDashboard";

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
        <Route exact path="/login" component={LoginView} />
        <PrivateRoute
          path="/application-dashboard/:applicationId"
          component={ApplicationDashboardView}
        />
        <PrivateRoute path="/" component={HomeView} />
      </Switch>
    </>
  );
};

export default App;
