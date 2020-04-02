import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Hello} from "./Hello";

export default () => {
  return(
    <Switch>
      <Route path={"/"}>
        <Hello/>
      </Route>
    </Switch>
  )
}