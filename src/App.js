import "./App.css";
import React from "react";

import { Fragment } from "react";
import Landing from "./containers/Landing";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./containers/Home";
import Skills from "./containers/Skills";
import Projects from "./containers/Projects";
import About from "./containers/About";

function App() {
  return (
    <Fragment>
      <BrowserRouter basename='/'>
        <Switch>
          <Route exact path='/' render={() => <Landing />} />
          <Route exact path='/home' render={() => <Home />} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
