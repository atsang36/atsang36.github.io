import React, { Component } from "react";
import "../../../assets/sass/main.scss";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import {
  faCircle,
  faEnvelope,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="inner">
          <ul className="icons">
            <li id="icon">
              <a href="https://twitter.com/">
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="2x"
                  className="twitter-icon"
                  color="cornflowerblue"
                />
              </a>
            </li>
            <li id="icon">
              <a id="hello" href="https://www.linkedin.com/in/andy-tsang/">
                <span className="fa-layers fa-fw fa-2x">
                  <FontAwesomeIcon icon={faSquare} color="white" />
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="linkedin-icon"
                    color="cornflowerblue"
                  />
                </span>
              </a>
            </li>
            <li id="icon">
              <a href="https://github.com/atsang36">
                <span className="fa-layers fa-fw fa-2x">
                  <FontAwesomeIcon icon={faCircle} color="white" />
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="github-icon"
                    color="cornflowerblue"
                  />
                </span>
              </a>
            </li>
            <li id="icon">
              <a href="https://google.com">
                <span className="fa-layers fa-fw fa-2x">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="email-icon"
                    color="cornflowerblue"
                  />
                </span>
              </a>
            </li>
          </ul>
          <ul id="footnotes" className="copyright">
            <li>&copy; Andy Tsang</li>
            <li>
              Design: <a href="http://html5up.net">HTML5 UP</a> | Demo Images:{" "}
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
