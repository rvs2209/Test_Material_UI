import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Main from "./Main";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />

        <Main />

        <Footer />
      </Fragment>
    );
  }
}
