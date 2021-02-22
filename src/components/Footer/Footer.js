import React, { Component } from "react";
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
        <div class="inner">
          <ul class="icons">
            <li>
              <FontAwesomeIcon icon={faTwitter} size="m" />
            </li>
            <li>
              <FontAwesomeIcon icon={faLinkedin} size="m" />
            </li>
            <li>
              <FontAwesomeIcon icon={faGithub} size="m" />
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} size="m" />
            </li>
          </ul>
          <ul class="copyright">
            <li>&copy; AT</li>
            <li>
              Design: <a href="http://html5up.net">HTML5 UP</a>
            </li>
            <li>
              Demo Images: <a href="http://https://unsplash.com/"> Unsplash</a>
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
