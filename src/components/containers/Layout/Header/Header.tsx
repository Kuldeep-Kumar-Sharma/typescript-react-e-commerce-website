import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  Button,
  FormControl,
  Badge,
  NavDropdown,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faShoppingCart,
  faUser,
  faUnlock,
} from "@fortawesome/free-solid-svg-icons";
import Link from "../../../Utility/Link/Link";
import { Wrapper } from "./Header.style";
import { NavLink } from "react-router-dom";

import Cart from "../../../../Pages/Products/Cart";

type Props = {
  products: readonly string[];
};

const Header: React.FC<Props> = ({ products }) => {
  return (
    <Wrapper>
      <Navbar expand="lg" sticky="top" className="background-header">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Navbar.Brand to="/" as={Link}>
                <FontAwesomeIcon color="white" icon={faStore} />
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
            <NavLink
              to="/cart"
              activeStyle={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              <FontAwesomeIcon color="white" icon={faShoppingCart} />
              <Badge variant="danger" pill>
                {products.length}
              </Badge>
            </NavLink>
            <NavDropdown
              className="head-text"
              title="James"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item to="/profile">
                <NavLink to="/profile" activeClassName="selected">
                  <FontAwesomeIcon icon={faUser} /> Profile
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <FontAwesomeIcon icon={faUnlock} /> Log Out
              </NavDropdown.Item>
            </NavDropdown>
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
