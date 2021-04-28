import React from "react";
import { Carousel, Container, Row, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Card from "../Card";
import { ProductCardProps } from "../../../Models/ProductCard";
import { GallerySplash } from "../../../Models/GallerySplash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import { Wrapper } from "./Gallery.style";
import { useSelector, shallowEqual } from "react-redux";
import { AppState } from "../../../Models";

const Gallery: React.FC = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [next, setNext] = useState<number>(3);
  const [prev, setPrev] = useState<number>(0);

  const [data, setData] = useState<GallerySplash[]>([]);
  const [products, setProducts] = useState<ProductCardProps[]>([]);

  const gallerySplashes: GallerySplash[] = useSelector(
    (state: AppState) => state.gyRr.gallerySplashes,
    shallowEqual
  );
  const productCardProps: ProductCardProps[] = useSelector(
    (state: AppState) => state.gyRr.productCardProps,
    shallowEqual
  );

  useEffect(() => {
    setData(gallerySplashes);
    setProducts(productCardProps);
  }, []);
  const Previous = () => {
    // if (0 < prev) {
    //   let p = prev - 1;
    //   setPrev(p);
    //   console.log(p);
    //   setPrev(p);
    //   setNext(next - 1);
    //   console.log("PREV");
    //   setControlledProducts(products.slice(prev, next));
    //   console.log(products);
    //   console.log(products.slice(prev, next));
    // }
  };

  const Next = () => {
    // if (products.length >= next) {
    //   setPrev(prev + 1);
    //   setNext(next + 1);
    //   setControlledProducts(products.slice(prev, next));
    // }
  };

  return (
    <Wrapper>
      <Container>
        <Carousel slide={false} className="upperMargin">
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
        {
          <Row className="cards">
            <Button
              onClick={Previous}
              className="paginationButton"
              variant="outline-primary"
            >
              <FontAwesomeIcon icon={faBackward} />
            </Button>
            {products.map((product) => {
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
        }
      </Container>
    </Wrapper>
  );
};

export default Gallery;
