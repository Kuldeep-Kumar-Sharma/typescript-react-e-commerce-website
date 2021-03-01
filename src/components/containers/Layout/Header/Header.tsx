import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  Button,
  FormControl,
  Badge,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Link from "../../../Utility/Link/Link";
import { Wrapper } from "./Header.style";

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Navbar expand="lg" sticky="top" className="background-header">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Navbar.Brand to="/" as={Link}>
                <FontAwesomeIcon icon={faStore} />
              </Navbar.Brand>
              <Nav.Link className="head-text" href="/">
                Dummy Seller
              </Nav.Link>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-light">Search</Button>
              </Form>
            </Nav>

            <FontAwesomeIcon icon={faShoppingCart} />
            <Badge variant="danger" pill>
              0
            </Badge>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="nav-scroller bg-white shadow-sm">
        <Container>
          <nav className="nav nav-underline"></nav>
        </Container>
      </div>
    </Wrapper>
  );
};

export default Header;
