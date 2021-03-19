import React from "react";
import { Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Wrapper } from "./Card.style";
import { ProductCardProps } from "../../../Models/ProductCard";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { addToCart } from "../../../Actions/cartActionCreators";

const ProductCard: React.FC<ProductCardProps> = (props) => {
  const dispatch: Dispatch<any> = useDispatch();

  const addtocart = React.useCallback(
    (product_id: string) => dispatch(addToCart(product_id)),
    [dispatch]
  );

  const sale = props.sale ? (
    <span>
      <span className="product-new-label">Sale</span>
      <span className="product-discount-label">{props.discount}%</span>;
    </span>
  ) : (
    ""
  );
  return (
    <Col md={3} sm={6}>
      <Wrapper>
        <div className="product-grid">
          <div className="product-image">
            <img className="pic-1" alt="pic 1" src={props.productImage} />
            <img className="pic-2" alt="pic 2" src={props.productImage2} />
            <ul className="social">
              <li>
                <FontAwesomeIcon className="flaticon" icon={faSearch} />
              </li>
              <li>
                <FontAwesomeIcon className="flaticon" icon={faShoppingCart} />
              </li>
            </ul>
          </div>
          {sale}
          <div className="product-content">
            <h3 className="title">{props.name}</h3>
            <div className="price">
              ₹{props.price}
              <span>₹{props.price}</span>
            </div>
            <Button
              variant="primary"
              onClick={() => addtocart(props.productId)}
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </Wrapper>
    </Col>
  );
};
export default ProductCard;
