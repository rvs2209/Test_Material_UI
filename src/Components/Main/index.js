import React from "react";
import { Grid, Paper } from "material-ui";

export default props => (
  <div>
    <Grid container spacing={8}>
      <Grid item xs>
        <Paper>Panel 1</Paper>
      </Grid>
      <Grid item xs>
        <Paper>Panel 2</Paper>
      </Grid>
      <Grid item xs>
        <Paper>Panel 3</Paper>
      </Grid>
    </Grid>
  </div>
);
