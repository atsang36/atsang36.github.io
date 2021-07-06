import React, { Component } from "react";
import "../../../assets/sass/main.scss";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="inner">
          <ul id="footnotes" className="copyright">
            <li>&copy; Andy Tsang</li>
            <li>
              Images: <a href="http://https://unsplash.com/"> Unsplash</a>
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
