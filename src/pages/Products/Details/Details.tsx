import React from "react";
import { Container, Col, Button, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Wrapper } from "./Details.style";
import { ProductCardProps } from "../../../Models/ProductCard";

const Details: React.FC<ProductCardProps> = (props) => {
  const sale = props.sale ? (
    <span>
      <span className="product-new-label">Sale</span>
      <span className="product-discount-label">{props.discount}%</span>
    </span>
  ) : (
    ""
  );

  for (let i: number = 0; i < props.rating; i++) {
    <FontAwesomeIcon className="flaticon" icon={faStar} />;
  }
  return (
    <Container>
      <Row>
        <Col md={3} sm={6}>
          <Wrapper>
            <div className="product-grid">
              <div className="product-image">
                <img className="pic-1" alt="pic 1" src={props.productImage} />
                <img className="pic-2" alt="pic 2" src={props.productImage} />
              </div>
              {sale}
            </div>
          </Wrapper>
        </Col>
        <Col md={6} sm={6}>
          <Wrapper>
            <div className="product-details">
              <div className="product-content">
                <h3 className="title">Name: {props.name}</h3>
                <div className="price">Price: ₹{props.price}</div>
                <div className="discription">
                  Discription: {props.discription}
                </div>

                <Button variant="primary">Add To Cart</Button>
              </div>
            </div>
          </Wrapper>
        </Col>
      </Row>
    </Container>
  );
};
export default Details;
