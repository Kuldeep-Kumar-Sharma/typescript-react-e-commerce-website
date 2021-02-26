import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;

  .product-grid {
    font-family: Raleway, sans-serif;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    overflow: hidden;
    position: relative;
    z-index: 1;
  }
  .product-cart-item {
    font-family: Raleway, sans-serif;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    overflow: hidden;
    position: relative;
  }
  .product-details {
    font-family: Raleway, sans-serif;
    text-align: left;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    overflow: hidden;
    position: relative;
  }
  .product-grid .product-image {
    position: relative;
    width: 20%;
    transition: all 0.3s ease 0s;
  }
  .product-grid .product-image a {
    display: block;
  }
  .product-grid .product-image img {
    width: 100%;
    height: auto;
  }
  .product-grid .pic-1 {
    opacity: 1;
    transition: all 0.3s ease-out 0s;
  }
  .product-grid:hover .pic-1 {
    opacity: 1;
  }
  .product-grid .pic-2 {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.3s ease-out 0s;
  }
  .product-grid:hover .pic-2 {
    opacity: 1;
  }
  .product-grid .rating {
    width: 150px;
    padding: 0;
    margin: 0;
    opacity: 0;
    transform: translateY(-50%) translateX(-50%);
    position: absolute;
    top: 60%;
    left: 50%;
    display: block;
    z-index: 1;
    transition: all 0.3s ease 0s;
  }
  .product-grid:hover .social {
    opacity: 1;
    top: 50%;
  }
  .product-grid .social li {
    display: inline-block;
  }
  .product-grid .social li .flaticon {
    color: #fff;
    background-color: #333;
    font-size: 16px;
    padding: 10px;
    line-height: 40px;
    text-align: center;
    height: 40px;
    width: 40px;
    margin: 0 2px;
    display: block;
    position: relative;
    transition: all 0.3s ease-in-out;
  }
  .product-grid .social li .flaticon:hover {
    color: #fff;
    background-color: #ef5777;
  }
  .product-grid .social li .flaticon:after,
  .product-grid .social li .flaticon:before {
    content: attr(data-tip);
    color: #fff;
    background-color: #000;
    font-size: 12px;
    letter-spacing: 1px;
    line-height: 20px;
    padding: 1px 5px;
    white-space: nowrap;
    opacity: 0;
    transform: translateX(-50%);
    position: absolute;
    left: 50%;
    top: -30px;
  }
  .product-grid .social li .flaticon:after {
    content: "";
    height: 15px;
    width: 15px;
    border-radius: 0;
    transform: translateX(-50%) rotate(45deg);
    top: -20px;
    z-index: -1;
  }
  .product-grid .social li .flaticon:hover:after,
  .product-grid .social li .flaticon:hover:before {
    opacity: 1;
  }
  .product-grid .product-discount-label,
  .product-grid .product-new-label {
    color: #fff;
    background-color: #ef5777;
    font-size: 12px;
    text-transform: uppercase;
    padding: 2px 7px;
    display: block;
    position: absolute;
    top: 10px;
    left: 0;
  }
  .product-grid .product-discount-label {
    background-color: #333;
    left: auto;
    right: 0;
  }
  .product-grid .rating li.disable {
    color: rgba(0, 0, 0, 0.2);
  }
  .product-grid .product-content {
    background-color: #fff;
    text-align: center;
    padding: 12px 0;
    margin: 0 auto;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -27px;
    z-index: 1;
    transition: all 0.3s;
  }
  .product-grid:hover .product-content {
    bottom: 0;
  }
  .product-grid .title {
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0.5px;
    text-transform: capitalize;
    margin: 0 0 10px;
    transition: all 0.3s ease 0s;
  }
  .product-grid .title {
    color: #828282;
  }
  .product-grid .title:hover,
  .product-grid:hover .title {
    color: #ef5777;
  }
  .product-details .price {
    color: #333;
    font-size: 17px;
    font-family: Montserrat, sans-serif;
    font-weight: 700;
    letter-spacing: 0.6px;
    margin-bottom: 8px;
    transition: all 0.3s;
  }

  .product-details .discription span {
    color: #999;
    font-size: 13px;
    font-weight: 400;
    text-decoration: line-through;
    margin-left: 3px;
    display: inline-block;
  }
  .product-grid .add-to-cart {
    color: #000;
    font-size: 13px;
    font-weight: 600;
  }
  @media only screen and (max-width: 990px) {
    .product-grid {
      margin-bottom: 30px;
    }
  }
`;
