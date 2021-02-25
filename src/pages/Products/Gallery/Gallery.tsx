import React from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import Card from "../Card/Card";
import { ProductCardProps } from "../../../Models/ProductCard";

//
const PC: ProductCardProps = {
  name: "Blouse",
  price: 250,
  rating: 5,
  sale: true,
  discount: 10,
  productImage:
    "http://bestjquery.com/tutorial/product-grid/demo9/images/img-1.jpg",
  productImage2:
    "http://bestjquery.com/tutorial/product-grid/demo9/images/img-2.jpg",
};

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
    <Container>
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

      <Container>
        <Row>
          <Card {...PC}></Card>
          <Card {...PC}></Card>
          <Card {...PC}></Card>
        </Row>
      </Container>
    </Container>
  );
};

export default Gallery;
