import React from 'react';
import { Toolbar } from 'meteor/cereal:ui/components/base/Toolbar';
import Divider from "@material-ui/core/Divider";
import {Link} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";

export default () => {
  return(
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem button component={Link} to={"/groups"}>
          <ListItemText primary={"Groups"} />
        </ListItem>
      </List>
    </div>
  )
}