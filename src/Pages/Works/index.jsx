/* eslint-disable no-unused-vars */
import React from "react";
import { Switch, Route } from "react-router-dom";
import Exercices from "../Exercices";
import Etudes from "../Etudes";
import Projets from "../Projets";
import NavWorks from "../../components/NavWorks";
import { FormattedMessage } from 'react-intl';
//works.jsx
const Works = () => {
  return (
    <div>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title"> <FormattedMessage id="works.title"/></h1>
            <h2 class="subtitle">
            <FormattedMessage id="works.subtitle"/>
            </h2>
          </div>
        </div>
      </section>

     <br></br> 

      <NavWorks />

      <Switch>
        <Route path="/works/Exercices">
          <Exercices />
        </Route>
        <Route path="/works/Case_study">
          <Etudes />s
        </Route>
        <Route path="/works/Projets_concrets">
          <Projets />
        </Route>
        <Route>
          <h1><FormattedMessage id="works.choice"/></h1>
        </Route>
      </Switch>
    </div>
  );
};

export default Works;
