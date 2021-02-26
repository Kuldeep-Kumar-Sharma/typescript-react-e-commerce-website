import React from "react";
import { Container, Col, Button, Row, Table, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Wrapper } from "./Cart.style";
import { ProductCardProps } from "../../../Models/ProductCard";

const Cart: React.FC<ProductCardProps> = (props) => {
  const sale = props.sale ? (
    <span>
      <span className="product-new-label">Sale</span>
      <span className="product-discount-label">{props.discount}%</span>
    </span>
  ) : (
    ""
  );

  let rating = [];
  for (let i: number = 0; i < props.rating; i++) {
    rating.push(<FontAwesomeIcon className="flaticon" icon={faStar} />);
  }
  return (
    <Container>
      <Wrapper>
        <Row>
          <Col xs={3} md={2}>
            <Image alt="pic 1" src={props.productImage} thumbnail />
          </Col>
          <Col xs={9} md={10}>
            <div className="product-Cart">
              <div className="product-content">
                <h5 className="title">Name: {props.name}</h5>
                <div className="price">Price: ₹{props.price}</div>
                <div className="rating">{rating}</div>
                <Button variant="primary">Add To Cart</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Wrapper>
    </Container>
  );
};
export default Cart;
