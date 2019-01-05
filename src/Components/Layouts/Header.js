import React, { Component, Fragment } from "react";
// import AppBar from 'material-ui/AppBar'
// import Toolbar from 'material-ui/Toolbar'
import { AppBar, Toolbar, Typography } from "material-ui";

export default props => (
  <Fragment>
    <AppBar position="static">
      <Toolbar>
        <Typography component="h2" variant="headline" color="inherit">
          Header title - coming from typography
        </Typography>
      </Toolbar>
    </AppBar>
  </Fragment>
);
