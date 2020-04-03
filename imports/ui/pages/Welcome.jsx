import React from 'react';
import PaddedPaper from 'meteor/cereal:ui/components/PaddedPaper';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

export default () => {
  return(
    <PaddedPaper>
      <Typography variant="h1">
        Welcome
      </Typography>
      <Typography variant="body1" paragraph>
        During these trying times, it's important to maintain social distancing.
        This application aims to help you get groceries for your friends and family, while
        you're already out getting your own.
      </Typography>
      <Grid container justify={"center"}>
        <Grid item>
          <Typography paragraph>
            <Button component={Link} to={"/register"} variant={"contained"} color={"primary"}>Register now!</Button>
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="body1" paragraph>
        Register and create your grocery list. Your friends and family can view your list
        and pick them up while they're out. You'll get a text when they leave, and another when
        they're on their way back.
      </Typography>
    </PaddedPaper>
  )
}