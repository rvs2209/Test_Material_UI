import React, { Fragment } from "react";
import { Paper, Typography, List } from "material-ui";
import { ListItem, ListItemText } from "material-ui/List";

export default ({ style, data }) => (
  <Paper style={style.Paper}>
    {data.map(([group, data]) => (
      <Fragment>
        <Typography
          component="h2"
          variant="headline"
          style={{ textTransform: "capitalize" }}
        >
          {group}
        </Typography>
        <List dense={true}>
          {data.map(exercise => (
            <ListItem button>
              <ListItemText primary={exercise.title} />
            </ListItem>
          ))}
        </List>
      </Fragment>
    ))}
  </Paper>
);
