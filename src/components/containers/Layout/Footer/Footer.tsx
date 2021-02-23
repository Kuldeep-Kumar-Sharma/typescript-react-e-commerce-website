import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Container } from "react-bootstrap";
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
import { Wrapper } from "./Footer.style";

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col>
            <h5>Quick links</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <FontAwesomeIcon icon={faAngleDoubleRight} />
                Home
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

            <p>Dummy Planet Registration</p>
            <p className="h6">© All Dummy Rights Reversed. Dummytech</p>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Footer;
