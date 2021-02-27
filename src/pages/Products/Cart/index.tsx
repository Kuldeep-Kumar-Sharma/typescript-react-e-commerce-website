import React, { useState } from "react";
import { Container, Col, Button, Row, Image, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import { Wrapper } from "./Cart.style";
import { ProductCardProps } from "../../../Models/ProductCard";

const Cart: React.FC<ProductCardProps> = (props) => {
  const [quantity, setQuantity] = useState(0);
  let total: number = 0;
  let cartProducts = [];
  for (let i: number = 0; i < props.rating; i++) {
    cartProducts.push(
      <Row>
        <Col xs={2} md={1}>
          {i + 1}
        </Col>
        <Col xs={4} md={2}>
          <Image
            className="product-image-thumnail"
            alt="pic 1"
            src={props.productImage}
            thumbnail
          />
        </Col>
        <Col xs={6} md={4}>
          <h6 className="title"> {props.name}</h6>
          {props.discription}
        </Col>
        <Col xs={2} md={2}>
          ₹{props.price}
        </Col>
        <Col xs={1} md={1}>
          <Form.Control
            type="number"
            placeholder="1"
            onChange={() => setQuantity(quantity + 1)}
          />
        </Col>
        <Col xs={2} md={2}>
          ₹{props.price * quantity}
        </Col>
      </Row>
    );
    total = total + props.price * quantity;
  }
  return (
    <Container>
      <Wrapper>
        <Row className="product-head">
          <Col xs={2} md={1}>
            #
          </Col>
          <Col xs={4} md={2}>
            Product
          </Col>
          <Col xs={6} md={4}>
            Details
          </Col>
          <Col xs={2} md={2}>
            Price
          </Col>
          <Col xs={1} md={1}>
            Quantity
          </Col>
          <Col xs={1} md={2}>
            Subtotal
          </Col>
        </Row>
        <hr />
        {cartProducts}
        <hr />
        <Row>
          <Col md={{ offset: 10 }}>
            <b>Total:</b> ₹{total}
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={4}>
            <Button variant="primary">
              <FontAwesomeIcon className="flaticon" icon={faBackward} />{" "}
              Continue Shopping
            </Button>
          </Col>
          <Col md={{ offset: 6 }}>
            <Button variant="success">
              Checkout <FontAwesomeIcon className="flaticon" icon={faForward} />
            </Button>
          </Col>
        </Row>
      </Wrapper>
    </Container>
  );
};
export default Cart;
