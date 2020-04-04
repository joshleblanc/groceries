import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Welcome from "./pages/Welcome";
import { Register } from 'meteor/cereal:ui/pages/Register';

export default () => {
  return(
    <Switch>
      <Route exact path={"/"}>
        <Welcome />
      </Route>
    </Switch>
  )
}