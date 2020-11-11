import "../../src/App.css";
import React from "react";

import { Link } from "react-router-dom";
import { Fragment } from "react";

const NavBar = () => {
  return (
    <Fragment>
      <nav class='navbar navbar-light bg-light'>
        <div class='container-fluid'>
          <span class='navbar-brand mb-0 h1'>Navbar</span>
          <ul class='navbar-nav'>
            <li class='nav-item'>
              <Link to='/about'>About Me</Link>
            </li>
            <li class='nav-item'>
              <Link to='/skills'>Skills</Link>
            </li>
            <li class='nav-item'>
              <Link to='/projects'>Projects </Link>
            </li>

            <li class='nav-item'>
              <Link to='/about'>About Me</Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
