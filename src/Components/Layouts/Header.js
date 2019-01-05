import React, { Component, Fragment } from "react";
// import AppBar from 'material-ui/AppBar'
// import Toolbar from 'material-ui/Toolbar'
import { AppBar, Toolbar, Typography, Grid } from "material-ui";

export default ({ title }) => (
  <Fragment>
    <AppBar position="static">
      <Toolbar>
        <Typography component="h2" variant="headline" color="inherit">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  </Fragment>
);
