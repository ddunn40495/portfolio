import "../../src/App.css";
import React from "react";

import { Fragment } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Fragment>
      {/* Container for Page  */}
      <div className='container-fluid bg'>
        <div class='row'>
          {/* Column 1  */}
          <div class='col-sm-3'></div>
          {/* Column 2 */}
          <div class='col-sm-7'>
            {/* First Row */}
            <div className='row'></div>
            {/* Second Row */}

            <div className='row'>
              {/*  Main Card Div   */}

              <div className='main-card-div'>
                <div class='card main-card'>
                  {/*  Card Content Start*/}

                  <div class='card-body'>
                    <h4 class='card-title'>Daniel Dunn's Portfolio </h4>
                    <p class='card-text'>
                      <Link to='/home'>Home</Link>
                    </p>
                  </div>
                  {/*  Card Content End */}
                </div>
              </div>
            </div>
            {/* Thrid Row */}
            <div className='row'></div>
          </div>
          {/* Column 3 */}
          <div class='col-sm-2'></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
