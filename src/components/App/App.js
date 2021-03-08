import React, { Component } from "react";
import "../../../assets/sass/main.scss";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid>
          <Row>
            <Col s={4} md={4}>
              <Header></Header>
              <Footer></Footer>
            </Col>
            <Col s={8} md={8}>
              <Main></Main>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default App;
