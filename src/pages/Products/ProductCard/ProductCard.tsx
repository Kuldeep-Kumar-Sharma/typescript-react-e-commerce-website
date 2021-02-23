import React from "react";
import { Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Wrapper } from "./ProductCard.style";

const ProductCard: React.FC = () => {
  return (
    <Col md={3} sm={6}>
      <Wrapper>
        <div className="product-grid">
          <div className="product-image">
            <img
              className="pic-1"
              alt="pic 1"
              src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-1.jpg"
            />
            <img
              className="pic-2"
              alt="pic 2"
              src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-2.jpg"
            />
            <ul className="social">
              <li>
                <FontAwesomeIcon className="flaticon" icon={faSearch} />
              </li>
              <li>
                <FontAwesomeIcon className="flaticon" icon={faShoppingCart} />
              </li>
            </ul>
            <span className="product-new-label">Sale</span>
            <span className="product-discount-label">20%</span>
          </div>
          <div className="product-content">
            <h3 className="title">Women's Blouse</h3>
            <div className="price">
              $16.00
              <span>$20.00</span>
            </div>
            <Button variant="primary">Add To Cart</Button>
          </div>
        </div>
      </Wrapper>
    </Col>
  );
};
export default ProductCard;
