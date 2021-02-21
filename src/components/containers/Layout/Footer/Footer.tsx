import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from "react-bootstrap";
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
        <Row className="text-center text-xs-center text-sm-left text-md-left">
          <Col>
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
          </Col>
          {/* <div className="col-xs-12 col-sm-4 col-md-4"> */}
          <Col>
            <h5>Dummy Shops</h5>
            {/* <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5"> */}
            <Col>
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
            </Col>
            <hr />
          </Col>
          <Row>
            {/* <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white"> */}
            <Col>
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
            </Col>
          </Row>
        </Row>
      </div>
    </section>
  );
};

export default Footer;
