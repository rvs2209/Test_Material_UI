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
        <Grid container direction="row">
          <Grid item xs={9}>
            <Header title="Login Screen" />
          </Grid>
          <Grid item xs={9}>
            <Main exercises={exercises} />
          </Grid>
          <Grid item xs={9}>
            <Footer labels={muscles} />
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}
