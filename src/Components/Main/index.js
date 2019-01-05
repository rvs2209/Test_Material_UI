import React from "react";
import { Grid, Paper } from "material-ui";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const style = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
};
export default ({ exercises }) => (
  <div>
    <Grid container spacing={8}>
      <Grid item xs={4}>
        <LeftPane style={style} data={exercises} />
      </Grid>
      <Grid item xs>
        <RightPane style={style} />
      </Grid>
    </Grid>
  </div>
);
