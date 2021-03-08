import React, { Component } from "react";
import "../../../assets/sass/main.scss";

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          {/* <a href="#" class="image avatar">
            <img src="images/avatar.jpg" alt="" />
          </a> */}
          <h1>
            Hi,
            <br /> I am <strong>Andy Tsang</strong>,
            <br />
            Software Developer
          </h1>
        </div>
      </header>
    );
  }
}

export default Header;
