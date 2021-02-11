import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

interface linkprops {
  to: string;
  children: React.ReactNode;
}

const Linked: React.FC<linkprops> = (props: linkprops) => {
  return (
    <Nav.Link as={Link} to={props.to}>
      {props.children}
    </Nav.Link>
  );
};

export default Linked;
