import React, { Component } from "react";
import { Fragment } from "react";
import "../../../assets/sass/main.scss";
import Entry from "../Entry/Entry";

import "./main.scss";
class Main extends Component {
  render() {
    return (
      <Fragment>
        <div id="body">
          <h1>Projects</h1>
          <Entry></Entry>
          <Entry></Entry>
          <Entry></Entry>
          <Entry></Entry>
          <Entry></Entry>
        </div>
      </Fragment>
    );
  }
}

export default Main;
