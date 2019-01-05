import React from "react";
import { Grid, Paper } from "material-ui";

export default props => (
  <div>
    <Grid container xs>
      <Grid item xs={12}>
        <Paper>Panel 1</Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper>Panel 2</Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper>Panel 3</Paper>
      </Grid>
    </Grid>
  </div>
);
