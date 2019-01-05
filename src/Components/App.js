import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Main from "./Main";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header title="Login Screen" />

        <Main />

        <Footer items={["Item 1", "Item 2", "Item 3", "Item 4"]} />
      </Fragment>
    );
  }
}
