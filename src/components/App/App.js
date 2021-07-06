import React, { Component } from "react";
import "../../../assets/sass/main.scss";
import "./App.scss";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid>
          <Row>
            <Col id="left-column" xs={12} s={12} md={6} lg={4}>
              <Header></Header>
              <Sidebar></Sidebar>
              <Footer></Footer>
            </Col>
            <Col id="right-column" xs={12} s={12} md={6} lg={8}>
              <Main id="main"></Main>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default App;
