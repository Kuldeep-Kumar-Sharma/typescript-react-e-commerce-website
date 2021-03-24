import React from "react";
import { Carousel, Container, Row, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import Card from "../Card";
import { ProductCardProps } from "../../../Models/ProductCard";
import { GallerySplash } from "../../../Models/GallerySplash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import { Wrapper } from "./Gallery.style";

const Gallery: React.FC = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState<GallerySplash[]>([]);
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [next, setNext] = useState<number>(3);
  const [prev, setPrev] = useState<number>(0);

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
          setData(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
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
          setProducts(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [products, data]);

  const [controlledProducts, setControlledProducts] = useState<
    ProductCardProps[]
  >([]);
  setControlledProducts(products.slice(prev, next));
  const Previous = () => {
    if (0 >= prev) {
      setControlledProducts(products.slice(prev, next));
    } else {
      setPrev(prev - 1);
      setNext(next - 1);
      setControlledProducts(products.slice(prev, next));
    }
  };

  const Next = () => {
    if (products.length > next) {
      setPrev(prev + 1);
      setNext(next + 1);
      setControlledProducts(products.slice(prev, next));
    } else {
      setControlledProducts(products.slice(prev, next));
    }
  };

  return (
    <Wrapper>
      <Container>
        <Carousel className="upperMargin">
          {data.map((product) => {
            return (
              <Carousel.Item key={product.searchID}>
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
        <Row className="cards">
          <Button
            onClick={Previous}
            className="paginationButton"
            variant="outline-primary"
          >
            <FontAwesomeIcon icon={faBackward} />
          </Button>
          {controlledProducts.map((product) => {
            return <Card key={product.productId} {...product} />;
          })}
          <Button
            onClick={Next}
            className="paginationButton"
            variant="outline-primary"
          >
            <FontAwesomeIcon icon={faForward} />
          </Button>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Gallery;
