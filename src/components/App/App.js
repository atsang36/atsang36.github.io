import React, { Component } from "react";
import "./App.scss";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class App extends Component {
  render() {
    return (
      <html lang="en">
        <head>
          <title>AT's Personal Website</title>
          <meta charset="utf-8" />
          <meta
          // name="viewport"
          // content="width=device-width, initial-scale=1, user-scalable=no"
          />
          <link rel="stylesheet" href="assets/scss/main.scss" />
          <script
            src="https://kit.fontawesome.com/46fd5270f7.js"
            crossorigin="anonymous"
          ></script>
        </head>
        <body>
          <Header id="header"></Header>
          <Main id="main"></Main>
          <Footer id="footer"></Footer>
        </body>
      </html>
    );
  }
}

export default App;
