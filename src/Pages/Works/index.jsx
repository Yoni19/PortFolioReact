/* eslint-disable no-unused-vars */
import React from "react";
import { Switch, Route } from "react-router-dom";
import Exercices from "../Exercices"
import Etudes from '../Etudes'
import Projets from '../Projets'
import NavWorks from "../../components/NavWorks"
//works.jsx
const Works = () => {
  return (
    <div>
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
            <h1>NON</h1>
          </Route>
        </Switch>

    </div>
  );
};

export default Works;
