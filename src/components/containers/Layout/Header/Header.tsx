import React from "react";
import {
  Container,
  Navbar,
  Nav,
  // NavDropdown,
  Form,
  Button,
  FormControl,
  Badge,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Link from "../../../Utility/Link/Link";

//for small styles
const navBarStyles = {
  backgroundColor: "#fff",
  backgroundImage: "linear-gradient(0deg, #D2D2D2 0%, #97D9E1 100%);",
  boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.3)",
};

const Header: React.FC = () => {
  return (
    <div>
      <Navbar
        bg="light"
        variant="light"
        expand="lg"
        sticky="top"
        style={navBarStyles}
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Navbar.Brand to="/" as={Link}>
                <FontAwesomeIcon icon={faStore} />
              </Navbar.Brand>
              <Nav.Link href="/">Dummy Seller</Nav.Link>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-lg-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="/loading">Loading</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>

            <Button variant="link">
              <FontAwesomeIcon icon={faShoppingCart} />
              <Badge variant="danger" pill>
                0
              </Badge>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="nav-scroller bg-white shadow-sm">
        <Container>
          <nav className="nav nav-underline"></nav>
        </Container>
      </div>
    </div>
  );
};

export default Header;
