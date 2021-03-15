import React, { Component } from "react";
import "../../../assets/sass/main.scss";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="inner">
          <ul className="icons">
            <li id="icon">
              <a href="https://twitter.com/">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
            </li>
            <li id="icon">
              <a href="https://www.linkedin.com/in/andy-tsang/">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </li>
            <li id="icon">
              <a href="https://github.com/atsang36">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </li>
            <li id="icon">
              <a href="https://google.com">
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </a>
            </li>
          </ul>
          <ul className="copyright">
            <li>&copy; Andy Tsang</li>
            <li>
              Design: <a href="http://html5up.net">HTML5 UP</a> || Demo Images:{" "}
              <a href="http://https://unsplash.com/"> Unsplash</a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://icons8.com/icons/set/hachiko"
              >
                Shiba Inu icon
              </a>{" "}
              icon by{" "}
              <a target="_blank" rel="noreferrer" href="https://icons8.com">
                Icons8
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
