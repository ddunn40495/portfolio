import React from "react";

import { Fragment } from "react";
import NavBar from "../components/NavBar";

const About = () => {
  return (
    <Fragment>
      {/*  Container Start */}
      <div class='container-fluid home-bg'>
        {/*  Row-1 Start */}
        <div className='row'>
          {/*  Col Start */}
          <div class='col-sm phone-home-cols grid-line'>
            {/* Title Card Start  */}

            <div class='card'>
              <div class='card-body'>
                <h2>About</h2>
              </div>
            </div>
            {/* Title Card End  */}
          </div>
          {/* Col End  */}
        </div>
        {/*  Row-1 End */}
        {/* =============*/}
        {/*  Row-2 Start */}
        <div className='row'></div>
        {/*  Row-2 End */}
      </div>

      {/*  Container End */}
    </Fragment>
  );
};

export default About;
