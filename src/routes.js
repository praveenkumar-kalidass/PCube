import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AppContainer from "./Components/AppContainer";
import Home from "./Components/Home";
import Gallery from "./Components/Gallery";
import About from "./Components/About";

const AppRouter = () => (
  <Router basename="/">
    <Route path="/">
      <AppContainer>
        <Route exact path="/" component={Home}/>
        <Route path="/gallery" component={Gallery}/>
        <Route path="/about" component={About}/>
      </AppContainer>
    </Route>
  </Router>
);
export default AppRouter;
