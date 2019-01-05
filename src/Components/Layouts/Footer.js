import React from "react";

import { Paper, Tabs, Grid } from "material-ui";
import { Tab } from "material-ui/Tabs";

export default ({ labels }) => (
  <Paper>
    <Tabs value={1} indicatorColor="primary" textColor="primary" centered>
      <Tab label="All" />
      {labels.map(elem => (
        <Tab label={elem} />
      ))}
    </Tabs>
  </Paper>
);
