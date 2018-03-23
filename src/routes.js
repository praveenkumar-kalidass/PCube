import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AppContainer from "./Components/AppContainer";
import Home from "./Components/Home";

const AppRouter = () => (
  <Router basename="/">
    <Route path="/">
      <AppContainer>
        <Route path="/" component={Home}/>
      </AppContainer>
    </Route>
  </Router>
);
export default AppRouter;
