import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Welcome from "./pages/Welcome";

export default () => {
  return(
    <Switch>
      <Route path={"/"}>
        <Welcome />
      </Route>
    </Switch>
  )
}