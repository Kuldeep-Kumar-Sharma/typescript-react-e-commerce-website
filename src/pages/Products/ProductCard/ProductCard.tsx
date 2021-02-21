import React from "react";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const ProductCard: React.FC = () => {
  return (
    <Col md={3} sm={6}>
      <div className="product-grid">
        <div className="product-image">
          <a href="#">
            <img
              className="pic-1"
              src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-1.jpg"
            />
            <img
              className="pic-2"
              src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-2.jpg"
            />
          </a>
          <ul className="social">
            <li>
              <a href="" data-tip="Quick View">
                <FontAwesomeIcon icon={faSearch} />
              </a>
            </li>
            <li>
              <a href="" data-tip="Add to Cart">
                <FontAwesomeIcon icon={faShoppingCart} />
              </a>
            </li>
          </ul>
          <span className="product-new-label">Sale</span>
          <span className="product-discount-label">20%</span>
        </div>
        {/* <ul className="rating">
          <li>
            <FontAwesomeIcon icon={faStar} />
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} />
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} />
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} />
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} />
          </li>
        </ul> */}
        <div className="product-content">
          <h3 className="title">
            <a href="#">Women's Blouse</a>
          </h3>
          <div className="price">
            $16.00
            <span>$20.00</span>
          </div>
          <a className="add-to-cart" href="">
            + Add To Cart
          </a>
        </div>
      </div>
    </Col>
  );
};
export default ProductCard;
