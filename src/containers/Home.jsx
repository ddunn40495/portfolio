import "../../src/App.css";
import React from "react";

import { Fragment } from "react";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <Fragment>
      <NavBar />
      {/* Main Container */}
      <div class='container-fluid home-bg'>
        {/* Start Of Row */}
        <div class='row'>
          {/* First Col Start */}
          <div class='col-sm phone-home-cols grid-line'>
            {/* Title Card Start  */}
            <div class='card'>
              <div class='card-body'>
                <h2>About Me</h2>
              </div>
            </div>
            {/* Title Card End  */}
            {/* ================ */}
            {/* Main Card Start  */}

            <div class='card'>
              <div class='card-body'>This is some text within a card body.</div>
            </div>
            {/* Main Card End  */}
          </div>
          {/* First Col End */}
          {/* ================ */}
          {/* Second Col Start */}

          <div class='col-sm phone-home-cols grid-line'>
            {/* Title Card Start  */}

            <div class='card'>
              <div class='card-body'>
                <h2>Skills</h2>
              </div>
            </div>
            {/* Title Card End  */}
            {/* ================ */}
            {/* Main Card Start  */}

            <div class='card'>
              <div class='card-body'>This is some text within a card body.</div>
            </div>
            {/* Main Card End  */}
          </div>
          {/* Second Col End */}
          {/* ================ */}

          {/* Third Col Start */}

          <div class='col-sm phone-home-cols grid-line'>
            {/* Title Card Start */}

            <div class='card'>
              <div class='card-body'>
                <h2>Projects</h2>
              </div>
            </div>
            {/* Title Card End  */}
            {/* ================ */}
            {/* Main Card Start  */}

            <div class='card'>
              <div class='card-body'>This is some text within a card body.</div>
            </div>
            {/* Main Card End  */}
          </div>
          {/* Third Col End */}
        </div>
        {/* End of Row */}
      </div>
      {/* End of Container */}
    </Fragment>
  );
};

export default Home;
