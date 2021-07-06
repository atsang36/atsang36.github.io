import React, { Component } from "react";
import "../../../assets/sass/main.scss";
import "./Sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import {
  faCircle,
  faEnvelope,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";

class Sidebar extends Component {
  render() {
    return (
      <div className="inner">
        <ul className="icons">
          <li id="icon">
            <a href="https://www.linkedin.com/in/andy-tsang/">
              <span className="fa-layers fa-fw fa-3x">
                <FontAwesomeIcon icon={faSquare} color="white" />
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon"
                  color="darkgray"
                />
              </span>
            </a>
          </li>
          <li id="icon">
            <a href="https://github.com/atsang36">
              <span className="fa-layers fa-fw fa-3x">
                <FontAwesomeIcon icon={faCircle} color="white" />
                <FontAwesomeIcon
                  icon={faGithub}
                  className="github-icon"
                  color="darkgray"
                />
              </span>
            </a>
          </li>
          <li id="icon">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=andy.tsang63@gmail.com">
              <span className="fa-layers fa-fw fa-3x">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="email-icon"
                  color="darkgray"
                />
              </span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
