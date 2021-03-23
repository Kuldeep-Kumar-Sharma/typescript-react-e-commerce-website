import React from "react";
import { Carousel, Container, Row, Button } from "react-bootstrap";
import { useEffect, useState, useReducer } from "react";
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

  const reducer = (products: ProductCardProps[], action) => {
    if (action.type == "next") {
      if (products.length > action.next) {
        return products.slice(action.prev + 1, action.next + 1);
      }
      return products.slice(action.prev, action.next);
    }
    if (action.type == "prev") {
      if (0 <= action.prev) {
        return products.slice(action.prev, action.next);
      }
      return products.slice(action.prev - 1, action.next - 1);
    }
  };

  const [state, dispatch] = useReducer(reducer, {});

  const [prev, setprev] = useState(0);
  const [next, setNext] = useState(0);

  useEffect(() => {
    let pagenatingTheProducts = (products: ProductCardProps[]) => {
      setPageProducts();
      console.log(pageProducts);
    };

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
          pagenatingTheProducts(result);
          setNext(3);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <Wrapper>
      <Container>
        <Carousel className="upperMargin">
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
        <Row className="cards">
          <Button className="paginationButton" variant="outline-primary">
            <FontAwesomeIcon icon={faBackward} />
          </Button>
          {pageProducts.map((product) => {
            return <Card {...product} />;
          })}
          <Button className="paginationButton" variant="outline-primary">
            <FontAwesomeIcon icon={faForward} />
          </Button>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Gallery;
