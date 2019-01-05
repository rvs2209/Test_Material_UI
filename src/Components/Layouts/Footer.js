import React from "react";

import { Paper, Tabs } from "material-ui";
import { Tab } from "material-ui/Tabs";

export default props => (
  <Paper>
    <Tabs value={1} indicatorColor="primary" textColor="primary" centered>
      {props.items.map(elem => (
        <Tab label={elem} />
      ))}
    </Tabs>
  </Paper>
);
