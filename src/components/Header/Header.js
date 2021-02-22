import React, { Component } from "react";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div class="inner">
          {/* <a href="#" class="image avatar">
            <img src="images/avatar.jpg" alt="" />
          </a> */}
          <h1>
            <strong>I am Strata</strong>, a super simple
            <br />
            responsive site template freebie
            <br />
            crafted by <a href="http://html5up.net">HTML5 UP</a>.
          </h1>
        </div>
      </header>
    );
  }
}

export default Header;
