import "../../src/App.css";
import React from "react";

import { Fragment } from "react";
import NavBar from "../components/NavBar";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import { Route, BrowserRouter, Switch } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <BrowserRouter basename='/'>
        <NavBar />
        <Switch>
          <Route exact path='/about' render={() => <About />} />
          <Route exact path='/skills' render={() => <Skills />} />
          <Route exact path='/projects' render={() => <Projects />} />
        </Switch>
        {/* Main Container */}
        <div class='container-fluid home-bg'></div>
        {/* End of Container */}
      </BrowserRouter>
    </Fragment>
  );
};

export default Home;
