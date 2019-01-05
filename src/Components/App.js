import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Main from "./Main";
import { muscles, exercises } from "./Main/store";
import { Grid } from "material-ui";

export default class App extends Component {
  state = {
    exercises
  };

  getExercisesByMuscle() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
      }, {})
    );
  }

  render() {
    const exercises = this.getExercisesByMuscle();
    return (
      <Fragment>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="center"
          xs={12}
        >
          <Grid item xs={8}>
            <Grid container direction="row">
              <Grid item xs={12}>
                <Header title="Login Screen" />
              </Grid>
              <Grid item xs={12}>
                <Main exercises={exercises} />
              </Grid>
              <Grid item xs={12}>
                <Footer labels={muscles} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}
