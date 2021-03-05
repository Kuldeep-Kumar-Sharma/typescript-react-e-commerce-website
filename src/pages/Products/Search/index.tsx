import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import Card from "../Card";
import { ProductCardProps } from "../../../Models/ProductCard";
import { Wrapper } from "./Search.style";
import { SearchProps } from "../../../Models/Search";

//
const PC: ProductCardProps = {
  productId: "SN1025GN",
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

const Search: React.FC<SearchProps> = (props) => {
  const filter = [];
  const productcards = [];
  for (let i: number = 0; i < props.filters.length; i++) {
    filter.push(
      <Nav.Item>
        <Nav.Link eventKey={props.filters[i].eventKey}>
          {props.filters[i].name}
        </Nav.Link>
      </Nav.Item>
    );
    //product card was always with this filter card
    productcards.push(
      <Tab.Pane eventKey={props.filters[i].eventKey}>
        <Container>
          <Row>
            {props.productCards.map((product) => (
              <Card {...product} />
            ))}
          </Row>
        </Container>
      </Tab.Pane>
    );
  }

  return (
    <Wrapper>
      <h5>{props.term}</h5>
      <hr />
      <Tab.Container
        id="left-tabs-example"
        defaultActiveKey={props.filters[0].name}
      >
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              {filter}
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>{productcards}</Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Wrapper>
  );
};

export default Search;
