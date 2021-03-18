import React from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Card from "../Card";
import { ProductCardProps } from "../../../Models/ProductCard";
import { GallerySplash } from "../../../Models/GallerySplash";

const Gallery: React.FC = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState<GallerySplash[]>([]);
  const [products, setProducts] = useState<ProductCardProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:3004/splashes", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(result);
          setData(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
    // }, []);

    // useEffect(() => {
    fetch("http://localhost:3004/products", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(result);
          setProducts(result);
        },
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
                <h3>{product.splashName}</h3>
                <p>{product.splashDiscription}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>

      <Container>
        <Row>
          {products.map((product) => {
            return <Card {...product}></Card>;
          })}
        </Row>
      </Container>
    </Container>
  );
};

export default Gallery;
