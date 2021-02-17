import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faTumblr,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <section id="footer">
      <div className="container">
        <div className="row text-center text-xs-center text-sm-left text-md-left">
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Quick links</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <a href="./">
                  <FontAwesomeIcon icon={faAngleDoubleRight} />
                  Home
                </a>
              </li>
              <li>
                <a href="./">
                  <FontAwesomeIcon icon={faAngleDoubleRight} />
                  About
                </a>
              </li>
              <li>
                <a href="./">
                  <FontAwesomeIcon icon={faAngleDoubleRight} />
                  FAQ
                </a>
              </li>
              <li>
                <a href="./">
                  <FontAwesomeIcon icon={faAngleDoubleRight} />
                  Shopping
                </a>
              </li>
              <li>
                <a href="./">
                  <FontAwesomeIcon icon={faAngleDoubleRight} />
                  Your Orders
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Dummy Shops</h5>
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
              <ul className="list-unstyled list-inline social text-center">
                <li className="list-inline-item">
                  <a href="./">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="./">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="./">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="./">
                    <FontAwesomeIcon icon={faTumblr} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="./" target="_blank">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </li>
              </ul>
            </div>
            <hr />
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
              <p>
                <u>
                  <a href="./">Dummy Shopper</a>
                </u>
                Dummy Planet Registration
              </p>
              <p className="h6">
                © All Dummy Rights Reversed.
                <a className="text-green ml-2" href="./">
                  Dummytech
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
