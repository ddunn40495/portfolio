import "./App.css";
import React from "react";

import { Fragment } from "react";
import Landing from "./containers/Landing";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./containers/Home";
import Skills from "./containers/Skills";
import Projects from "./containers/Projects";

function App() {
  return (
    <Fragment>
      <BrowserRouter basename='/'>
        <Switch>
          <Route exact path='/' render={() => <Landing />} />
          <Route exact path='/home' render={() => <Home />} />
          <Route exact path='/skills' render={() => <Skills />} />
          <Route exact path='/projects' render={() => <Projects />} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
