import React from "react";

import { Fragment } from "react";
import NavBar from "../components/NavBar";

const Skills = () => {
  return (
    <Fragment>
      {/*  Container Start */}
      <div class='container-fluid home-bg'>
        {/*  Row-1 Start */}
        <div className='row'>
          {/*  Col Start */}
          <div class='col-sm phone-skills-cols grid-line'>
            {/* Title Card Start  */}

            <div class='card'>
              <div class='card-body'>
                <h2>Skills</h2>
              </div>
            </div>
            {/* Title Card End  */}
          </div>
          {/* Col End  */}
        </div>
        {/*  Row-1 End */}
        {/* =============*/}
        {/*  Row-2 Start */}
        <div className='row'>
          {/* All Skill Cards Start  */}
          {/* ================ */}
          {/*   Card Col-1 Start */}
          <div class='col-sm phone-skills-cols grid-line'>
            {/* Skill Card-1 Start  */}
            <div class='card skill-cards'>
              <div class='card-body'>
                <p class='card-text'>HTML/CSS</p>
              </div>
              <div
                className='card-img-bottom skills-pic'
                id='html-css-pic'
                alt='HTML-CSS-Logo'
              ></div>
            </div>
            {/* Skill Card-1 End  */}
          </div>
          {/* Card Col-1 End  */}
          {/* ================ */}
          {/*   Card Col-2 Start */}
          <div class='col-sm phone-skills-cols grid-line'>
            {/* Skill Card-2 Start  */}
            <div class='card skill-cards'>
              <div class='card-body'>
                <p class='card-text'>JavaScript</p>
              </div>
              <div
                class='card-img-bottom skills-pic'
                alt='JS-logo'
                id='js-pic'
              ></div>
            </div>
            {/* Skill Card-2 End  */}
          </div>
          {/* Card Col-2 End  */}
          {/* ================ */}
          {/*   Card Col-3 Start */}
          <div class='col-sm phone-skills-cols grid-line'>
            {/* Skill Card-3 Start  */}
            <div class='card skill-cards'>
              <div class='card-body'>
                <p class='card-text'>React</p>
              </div>
              <div
                class='card-img-bottom skills-pic'
                alt='React-Logo'
                id='react-pic'
              ></div>
            </div>
            {/* Skill Card-3 End  */}
          </div>
          {/* Card Col-3 End  */}
          {/* ================ */}
          {/*   Card Col-4 Start */}
          <div class='col-sm phone-skills-cols grid-line'>
            {/* Skill Card-4 Start  */}
            <div class='card skill-cards'>
              <div class='card-body'>
                <p class='card-text'>Node.js/Express</p>
              </div>
              <div
                class='card-img-bottom skills-pic'
                alt='nodejs-Logo'
                id='nodejs-pic'
              ></div>
            </div>
            {/* Skill Card-4 End  */}
          </div>
          {/* Card Col-4 End  */}
          {/* ================ */}
          {/*   Card Col-5 Start */}
          <div class='col-sm phone-skills-cols grid-line'>
            {/* Skill Card-5 Start  */}
            <div class='card skill-cards'>
              <div class='card-body'>
                <p class='card-text'>PHP</p>
              </div>
              <div
                class='card-img-bottom skills-pic'
                alt='php-Logo'
                id='php-pic'
              ></div>
            </div>
            {/* Skill Card-5 End  */}
          </div>
          {/* Card Col-5 End  */}
          {/* ================ */}
          {/*   Card Col-6 Start */}
          <div class='col-sm phone-skills-cols grid-line'>
            {/* Skill Card-6 Start  */}
            <div class='card skill-cards'>
              <div class='card-body'>
                <p class='card-text'>Laravel</p>
              </div>
              <div
                class='card-img-bottom skills-pic'
                alt='laravel-Logo'
                id='laravel-pic'
              ></div>
            </div>
            {/* Skill Card-6 End  */}
          </div>
          {/* Card Col-6 End  */}
          {/* ================ */}
          {/*   Card Col-7 Start */}
          <div class='col-sm phone-skills-cols grid-line'>
            {/* Skill Card-7 Start  */}
            <div class='card skill-cards'>
              <div class='card-body'>
                <p class='card-text'>SQL</p>
              </div>
              <div
                class='card-img-bottom skills-pic'
                alt='sql-Logo'
                id='sql-pic'
              ></div>
            </div>
            {/* Skill Card-7 End  */}
          </div>
          {/* Card Col-7 End  */}
          {/* ================ */}
          {/*   Card Col-8 Start */}
          <div class='col-sm phone-skills-cols grid-line'>
            {/* Skill Card-8 Start  */}
            <div class='card skill-cards'>
              <div class='card-body'>
                <p class='card-text'>Mongo DB</p>
              </div>
              <div
                class='card-img-bottom skills-pic'
                alt='mongo-Logo'
                id='mongo-pic'
              ></div>
            </div>
            {/* Skill Card-8 End  */}
          </div>
          {/* Card Col-8 End  */}
          {/* ================ */}
          {/*   Card Col-9 Start */}
          <div class='col-sm phone-skills-cols grid-line'>
            {/* Skill Card-9 Start  */}
            <div class='card skill-cards'>
              <div class='card-body'>
                <p class='card-text'>REST APIs</p>
              </div>
              <div
                class='card-img-bottom skills-pic'
                alt='rest-Logo'
                id='rest-pic'
              ></div>
            </div>
            {/* Skill Card-9 End  */}
          </div>
          {/* Card Col-9 End  */}
          {/* ================ */}
          {/*   Card Col-10 Start */}
          <div class='col-sm phone-skills-cols grid-line'>
            {/* Skill Card-10 Start  */}
            <div class='card skill-cards'>
              <div class='card-body'>
                <p class='card-text'>AWS</p>
              </div>
              <div
                class='card-img-bottom skills-pic'
                alt='aws-Logo'
                id='aws-pic'
              ></div>
            </div>
            {/* Skill Card-10 End  */}
          </div>
          {/* Card Col-10 End  */}
          {/* ================ */}
          {/*   Card Col-11 Start */}
          <div class='col-sm phone-skills-cols grid-line'>
            {/* Skill Card-11 Start  */}
            <div class='card skill-cards'>
              <div class='card-body'>
                <p class='card-text'>Linux</p>
              </div>
              <div
                class='card-img-bottom skills-pic'
                alt='linux-Logo'
                id='linux-pic'
              ></div>
            </div>
            {/* Skill Card-11 End  */}
          </div>
          {/* Card Col-11 End  */}
          {/* ================ */}
          {/*   Card Col-12 Start */}
          <div class='col-sm phone-skills-cols grid-line'>
            {/* Skill Card-12 Start  */}
            <div class='card skill-cards'>
              <div class='card-body'>
                <p class='card-text'>Github</p>
              </div>
              <div
                class='card-img-bottom skills-pic'
                alt='github-Logo'
                id='github-pic'
              ></div>
            </div>
            {/* Skill Card-12 End  */}
          </div>
          {/* Card Col-12 End  */}
          {/* ================ */}
          {/* All Skill Cards End  */}
        </div>
        {/*  Row-2 End */}
      </div>

      {/*  Container End */}
    </Fragment>
  );
};

export default Skills;
