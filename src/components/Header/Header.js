import React, { Component } from "react";
import "../../../assets/sass/main.scss";
import "./Header.scss";
import avatar from "../.././../images/avatar.jpg";

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="/#">
            <img id="avatar" src={avatar} alt="test" />
          </a>
          <h1>
            Hello,
            <br /> I am <strong id="name">Andy Tsang</strong>,
            <br />a Software Developer
          </h1>
        </div>
      </header>
    );
  }
}

export default Header;
