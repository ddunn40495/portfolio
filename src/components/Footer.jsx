import "./App.css";
import React from "react";

import { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer class='page-footer font-small cyan darken-3'>
        <div class='container'>
          <div class='row'>
            <div class='col-md-12 py-5'>
              <div class='mb-5 flex-center'>
                <a class='tw-ic' href='https://github.com/ddunn40495'>
                  <i class='fab fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x'>
                    {" "}
                  </i>
                </a>

                <a
                  class='li-ic'
                  href='https://www.linkedin.com/in/daniel-dunn-b733501b8/'
                >
                  <i class='fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x'>
                    {" "}
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class='footer-copyright text-center py-3'>
          © 2020 Copyright:
          <a href='https://github.com/ddunn40495/portfolio'> ddunn.net</a>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
