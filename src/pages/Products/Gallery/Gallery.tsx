import React from "react";
import { Carousel, Container, Col, Row, Image } from "react-bootstrap";
import "./Gallery.css";

//sample array to recive data
const data = [
  {
    imageSource:
      "https://images.unsplash.com/photo-1574758187370-1c8d72ee24d0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    imageAltText: "Sample Alt text",
    productName: "Dummy One",
    productDiscription: "Dummy One Dummy Discription",
    productID: 123,
  },

  {
    imageSource:
      "https://images.unsplash.com/photo-1587226516191-47ad119ba2fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    imageAltText: "Sample Alt text",
    productName: "Dummy One",
    productDiscription: "Dummy One Dummy Discription",
    productID: 123,
  },

  {
    imageSource:
      "https://images.unsplash.com/photo-1562070354-930df66ead59?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80",
    imageAltText: "Sample Alt text",
    productName: "Dummy One",
    productDiscription: "Dummy One Dummy Discription",
    productID: 123,
  },
];
const Gallery: React.FC = () => {
  return (
    <div>
      <Carousel>
        {data.map((product) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                height="550px"
                src={product.imageSource}
                alt={product.imageAltText}
              />
              <Carousel.Caption>
                <h3>slide label</h3>
                <p>{product.productDiscription}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>

      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
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
                      <i className="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" data-tip="Add to Wishlist">
                      <i className="fa fa-shopping-bag"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" data-tip="Add to Cart">
                      <i className="fa fa-shopping-cart"></i>
                    </a>
                  </li>
                </ul>
                <span className="product-new-label">Sale</span>
                <span className="product-discount-label">20%</span>
              </div>
              <ul className="rating">
                <li className="fa fa-star"></li>
                <li className="fa fa-star"></li>
                <li className="fa fa-star"></li>
                <li className="fa fa-star"></li>
                <li className="fa fa-star disable"></li>
              </ul>
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
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid">
              <div className="product-image">
                <a href="#">
                  <img
                    className="pic-1"
                    src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-3.jpg"
                  />
                  <img
                    className="pic-2"
                    src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-4.jpg"
                  />
                </a>
                <ul className="social">
                  <li>
                    <a href="" data-tip="Quick View">
                      <i className="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" data-tip="Add to Wishlist">
                      <i className="fa fa-shopping-bag"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" data-tip="Add to Cart">
                      <i className="fa fa-shopping-cart"></i>
                    </a>
                  </li>
                </ul>
                <span className="product-new-label">Sale</span>
                <span className="product-discount-label">50%</span>
              </div>
              <ul className="rating">
                <li className="fa fa-star"></li>
                <li className="fa fa-star"></li>
                <li className="fa fa-star"></li>
                <li className="fa fa-star"></li>
                <li className="fa fa-star"></li>
              </ul>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Men's Plain Tshirt</a>
                </h3>
                <div className="price">
                  $5.00
                  <span>$10.00</span>
                </div>
                <a className="add-to-cart" href="">
                  + Add To Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid">
              <div className="product-image">
                <a href="#">
                  <img
                    className="pic-1"
                    src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-5.jpg"
                  />
                  <img
                    className="pic-2"
                    src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-6.jpg"
                  />
                </a>
                <ul className="social">
                  <li>
                    <a href="" data-tip="Quick View">
                      <i className="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" data-tip="Add to Wishlist">
                      <i className="fa fa-shopping-bag"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" data-tip="Add to Cart">
                      <i className="fa fa-shopping-cart"></i>
                    </a>
                  </li>
                </ul>
                <span className="product-new-label">Sale</span>
                <span className="product-discount-label">50%</span>
              </div>
              <ul className="rating">
                <li className="fa fa-star"></li>
                <li className="fa fa-star"></li>
                <li className="fa fa-star"></li>
                <li className="fa fa-star"></li>
                <li className="fa fa-star"></li>
              </ul>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Men's Plain Tshirt</a>
                </h3>
                <div className="price">
                  $5.00
                  <span>$10.00</span>
                </div>
                <a className="add-to-cart" href="">
                  + Add To Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid">
              <div className="product-image">
                <a href="#">
                  <img
                    className="pic-1"
                    src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-7.jpg"
                  />
                  <img
                    className="pic-2"
                    src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-8.jpg"
                  />
                </a>
                <ul className="social">
                  <li>
                    <a href="" data-tip="Quick View">
                      <i className="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" data-tip="Add to Wishlist">
                      <i className="fa fa-shopping-bag"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" data-tip="Add to Cart">
                      <i className="fa fa-shopping-cart"></i>
                    </a>
                  </li>
                </ul>
                <span className="product-new-label">Sale</span>
                <span className="product-discount-label">50%</span>
              </div>
              <ul className="rating">
                <li className="fa fa-star"></li>
                <li className="fa fa-star"></li>
                <li className="fa fa-star"></li>
                <li className="fa fa-star"></li>
                <li className="fa fa-star"></li>
              </ul>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Men's Plain Tshirt</a>
                </h3>
                <div className="price">
                  $5.00
                  <span>$10.00</span>
                </div>
                <a className="add-to-cart" href="">
                  + Add To Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
