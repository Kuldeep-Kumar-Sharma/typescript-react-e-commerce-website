import React from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Card from "../Card";
import { ProductCardProps } from "../../../Models/ProductCard";

const Gallery: React.FC = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "file:///D:/Learning-Development/React/e-commerce-website/src/__MOCK__/products.json"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

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
